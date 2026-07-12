"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Lang } from "@/components/lang";
import { useUI } from "@/components/ui-provider";
import { VerifiedBadge, Stars } from "@/components/ui";
import { lawyers } from "@/lib/mock/lawyers";
import { SearchIcon, MicIcon, MapPinIcon, ChevronDownIcon, NavigationIcon, UsersIcon } from "@/components/icons";

/** Approximate coordinates for the cities lawyers practice in (for the "near me" geo filter). */
const CITY_COORDS: Record<string, { lat: number; lon: number }> = {
  Dhaka: { lat: 23.8103, lon: 90.4125 },
  Chattogram: { lat: 22.3569, lon: 91.7832 },
  Sylhet: { lat: 24.8949, lon: 91.8687 },
};

function haversineKm(a: { lat: number; lon: number }, b: { lat: number; lon: number }) {
  const R = 6371;
  const dLat = ((b.lat - a.lat) * Math.PI) / 180;
  const dLon = ((b.lon - a.lon) * Math.PI) / 180;
  const s =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((a.lat * Math.PI) / 180) * Math.cos((b.lat * Math.PI) / 180) * Math.sin(dLon / 2) ** 2;
  return Math.round(2 * R * Math.asin(Math.sqrt(s)));
}

type GeoState = "idle" | "locating" | "on" | "denied";

export function LawyersDirectory() {
  const { lang } = useUI();
  const [q, setQ] = useState("");
  const [spec, setSpec] = useState("all");
  const [location, setLocation] = useState("all");
  const [onlineOnly, setOnlineOnly] = useState(false);
  const [geo, setGeo] = useState<GeoState>("idle");
  const [userPos, setUserPos] = useState<{ lat: number; lon: number } | null>(null);

  const specialties = useMemo(() => {
    const map = new Map<string, string>();
    lawyers.forEach((l) => l.specialties.forEach((s) => map.set(s.en, s.bn)));
    return Array.from(map.entries());
  }, []);

  const locations = useMemo(() => {
    const map = new Map<string, string>();
    lawyers.forEach((l) => map.set(l.location.en, l.location.bn));
    return Array.from(map.entries());
  }, []);

  function locateMe() {
    if (geo === "on") {
      setGeo("idle");
      setUserPos(null);
      return;
    }
    if (typeof navigator === "undefined" || !navigator.geolocation) {
      // Fallback: assume central Dhaka so the feature still demonstrates.
      setUserPos(CITY_COORDS.Dhaka);
      setGeo("on");
      return;
    }
    setGeo("locating");
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setUserPos({ lat: pos.coords.latitude, lon: pos.coords.longitude });
        setGeo("on");
      },
      () => {
        // Denied / unavailable — fall back to Dhaka so results still sort by distance.
        setUserPos(CITY_COORDS.Dhaka);
        setGeo("denied");
      },
      { timeout: 8000 },
    );
  }

  const withDistance = lawyers.map((l) => {
    const coords = CITY_COORDS[l.location.en];
    const distanceKm = userPos && coords ? haversineKm(userPos, coords) : null;
    return { lawyer: l, distanceKm };
  });

  let shown = withDistance.filter(({ lawyer: l }) => {
    const text = `${l.name} ${l.location.en} ${l.location.bn} ${l.specialties.map((s) => s.en + s.bn).join(" ")}`.toLowerCase();
    return (
      text.includes(q.toLowerCase()) &&
      (spec === "all" || l.specialties.some((s) => s.en === spec)) &&
      (location === "all" || l.location.en === location) &&
      (!onlineOnly || l.online)
    );
  });

  if (userPos) {
    shown = [...shown].sort((a, b) => (a.distanceKm ?? 1e9) - (b.distanceKm ?? 1e9));
  }

  const hasFilters = q || spec !== "all" || location !== "all" || onlineOnly || userPos;

  function reset() {
    setQ("");
    setSpec("all");
    setLocation("all");
    setOnlineOnly(false);
    setGeo("idle");
    setUserPos(null);
  }

  return (
    <>
      <div className="lawyer-toolbar">
        <div className="row1">
          <div className="searchbar">
            <SearchIcon />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder={lang === "bn" ? "নাম, ক্ষেত্র বা শহর খুঁজুন…" : "Search name, area of law or city…"}
              aria-label="Search lawyers"
            />
            <button type="button" className="mic" aria-label="Voice search">
              <MicIcon width={16} height={16} />
            </button>
          </div>

          <div className="select-field">
            <UsersIcon width={16} height={16} />
            <select value={spec} onChange={(e) => setSpec(e.target.value)} aria-label="Area of law">
              <option value="all">{lang === "bn" ? "সব ক্ষেত্র" : "All areas"}</option>
              {specialties.map(([en, bn]) => (
                <option key={en} value={en}>
                  {lang === "bn" ? bn : en}
                </option>
              ))}
            </select>
            <ChevronDownIcon className="chev" width={15} height={15} />
          </div>

          <div className="select-field">
            <MapPinIcon width={16} height={16} />
            <select value={location} onChange={(e) => setLocation(e.target.value)} aria-label="City">
              <option value="all">{lang === "bn" ? "সব শহর" : "All cities"}</option>
              {locations.map(([en, bn]) => (
                <option key={en} value={en}>
                  {lang === "bn" ? bn : en}
                </option>
              ))}
            </select>
            <ChevronDownIcon className="chev" width={15} height={15} />
          </div>

          <button
            className={`near-toggle ${geo === "on" || geo === "denied" ? "on" : ""}`}
            onClick={locateMe}
            aria-pressed={!!userPos}
          >
            <NavigationIcon />
            {geo === "locating" ? (
              <Lang en="Locating…" bn="খুঁজছি…" />
            ) : userPos ? (
              <Lang en="Near me: on" bn="কাছাকাছি: চালু" />
            ) : (
              <Lang en="Near me" bn="কাছাকাছি" />
            )}
          </button>
        </div>

        <div className="filters" style={{ margin: 0 }}>
          <button className={`fpill ${!onlineOnly ? "" : "on"}`} onClick={() => setOnlineOnly((v) => !v)}>
            ● <Lang en="Online now" bn="এখন অনলাইন" />
          </button>
          {specialties.slice(0, 5).map(([en, bn]) => (
            <button key={en} className={`fpill ${spec === en ? "on" : ""}`} onClick={() => setSpec(spec === en ? "all" : en)}>
              <Lang en={en} bn={bn} />
            </button>
          ))}
        </div>

        <div className="toolbar-meta">
          <span>
            <Lang en={`${shown.length} verified lawyers`} bn={`${shown.length} জন যাচাইকৃত আইনজীবী`} />
          </span>
          {geo === "denied" && (
            <span style={{ color: "var(--warn)" }}>
              <Lang en="Location off — showing distance from Dhaka" bn="লোকেশন বন্ধ — ঢাকা থেকে দূরত্ব" />
            </span>
          )}
          {userPos && geo === "on" && (
            <span style={{ color: "var(--primary)", fontWeight: 700 }}>
              <Lang en="Sorted by distance from you" bn="আপনার থেকে দূরত্ব অনুযায়ী সাজানো" />
            </span>
          )}
          {hasFilters && (
            <button className="clear" onClick={reset}>
              <Lang en="Clear filters" bn="ফিল্টার সাফ" />
            </button>
          )}
        </div>
      </div>

      {shown.length === 0 ? (
        <div style={{ textAlign: "center", padding: "56px 20px" }}>
          <div className="emptyico" style={{ margin: "0 auto 14px" }}>
            <SearchIcon width={26} height={26} />
          </div>
          <div className="st-t" style={{ marginBottom: 6 }}>
            <Lang en="No lawyers match your filters" bn="আপনার ফিল্টারে কোনো আইনজীবী নেই" />
          </div>
          <button className="btn btn-ghost btn-sm" onClick={reset} style={{ marginTop: 6 }}>
            <Lang en="Clear filters" bn="ফিল্টার সাফ" />
          </button>
        </div>
      ) : (
        <div className="grid-3">
          {shown.map(({ lawyer: l, distanceKm }) => (
            <Link key={l.slug} href={`/lawyers/${l.slug}`} className="lawyer-card">
              <div className="lc-top">
                <span className="avatar" style={{ background: l.avatarColor }}>
                  {l.initials}
                </span>
                <div>
                  <div className="lc-name">{l.name}</div>
                  <div className="lc-spec">
                    <Lang en={l.location.en} bn={l.location.bn} /> · {l.experienceYears} <Lang en="yrs" bn="বছর" />
                    {l.online && <span style={{ color: "var(--primary)", fontWeight: 700 }}> · ● Online</span>}
                  </div>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                {l.verified && <VerifiedBadge en="Bar Council verified" bn="বার কাউন্সিল যাচাইকৃত" />}
                {distanceKm != null && (
                  <span className="dist">
                    <MapPinIcon width={13} height={13} /> {distanceKm} km
                  </span>
                )}
              </div>
              <div className="tag-row">
                {l.specialties.map((s) => (
                  <span key={s.en} className="fpill" style={{ padding: "4px 10px", fontSize: 11 }}>
                    <Lang en={s.en} bn={s.bn} />
                  </span>
                ))}
              </div>
              <div className="lc-foot">
                <Stars rating={l.rating} count={l.reviews} />
                <b>
                  ৳{l.feePerSession.toLocaleString()} <span style={{ color: "var(--muted)", fontWeight: 500 }}>/ session</span>
                </b>
              </div>
            </Link>
          ))}
        </div>
      )}

      <div style={{ marginTop: 22, display: "flex", alignItems: "center", gap: 8, color: "var(--muted)", fontSize: 13 }}>
        <UsersIcon width={16} height={16} />
        <Lang
          en="Consultations are over secure in-app chat. Video consultation is coming later."
          bn="পরামর্শ নিরাপদ ইন-অ্যাপ চ্যাটে হয়। ভিডিও পরামর্শ পরে আসছে।"
        />
      </div>
    </>
  );
}
