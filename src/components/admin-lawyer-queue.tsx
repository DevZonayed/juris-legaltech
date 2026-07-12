"use client";

import { useState } from "react";
import { Lang } from "@/components/lang";
import { lawyers } from "@/lib/mock/lawyers";
import { Stars } from "@/components/ui";
import { CheckIcon, XIcon } from "@/components/icons";

interface Row {
  slug: string;
  name: string;
  initials: string;
  color: string;
  reg: string;
  location: { en: string; bn: string };
  rating: number;
  reviews: number;
  status: "pending" | "verified";
}

const seed: Row[] = [
  { slug: "md-kamal-hossain", name: "Adv. Md. Kamal Hossain", initials: "MK", color: "#6C4BB6", reg: "Bar reg. 2018", location: { en: "Dhaka", bn: "ঢাকা" }, rating: 4.8, reviews: 96, status: "pending" },
  { slug: "nusrat-jahan", name: "Adv. Nusrat Jahan", initials: "NJ", color: "var(--primary)", reg: "Bar reg. 2020", location: { en: "Chattogram", bn: "চট্টগ্রাম" }, rating: 4.5, reviews: 74, status: "pending" },
  { slug: "tanvir-ahmed", name: "Adv. Tanvir Ahmed", initials: "TA", color: "var(--info)", reg: "Bar reg. 2016", location: { en: "Dhaka", bn: "ঢাকা" }, rating: 4.4, reviews: 61, status: "pending" },
  { slug: "sadia-rahman", name: "Adv. Sadia Rahman", initials: "SR", color: "var(--primary)", reg: "Bar reg. 2014", location: { en: "Dhaka", bn: "ঢাকা" }, rating: 4.6, reviews: 128, status: "verified" },
  { slug: "shuvra-barua", name: "Adv. Shuvra Barua", initials: "SB", color: "var(--gold-2)", reg: "Bar reg. 2015", location: { en: "Sylhet", bn: "সিলেট" }, rating: 4.7, reviews: 53, status: "verified" },
];

export function AdminLawyerQueue() {
  const [rows, setRows] = useState<Row[]>(seed);

  function resolve(slug: string, status: "verified" | "pending") {
    setRows((rs) => rs.map((r) => (r.slug === slug ? { ...r, status } : r)));
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      {rows.map((r) => (
        <div className="card2" key={r.slug} style={{ display: "flex", alignItems: "center", gap: 14, flexWrap: "wrap" }}>
          <span className="avatar" style={{ width: 44, height: 44, fontSize: 16, background: r.color }}>
            {r.initials}
          </span>
          <div style={{ minWidth: 180 }}>
            <div style={{ fontWeight: 700, fontSize: 14 }}>{r.name}</div>
            <div style={{ fontSize: 12, color: "var(--muted)" }}>
              {r.reg} · <Lang en={r.location.en} bn={r.location.bn} />
            </div>
          </div>
          <Stars rating={r.rating} count={r.reviews} />
          <span className={`pillstat ${r.status === "verified" ? "ok" : "pending"}`} style={{ marginLeft: "auto" }}>
            {r.status === "verified" ? <Lang en="Verified" bn="যাচাইকৃত" /> : <Lang en="Pending" bn="অপেক্ষমাণ" />}
          </span>
          {r.status === "pending" ? (
            <div style={{ display: "flex", gap: 8 }}>
              <button className="btn btn-primary btn-sm" onClick={() => resolve(r.slug, "verified")}>
                <CheckIcon width={15} height={15} /> <Lang en="Verify" bn="যাচাই" />
              </button>
              <button className="btn btn-ghost btn-sm" style={{ color: "var(--danger)", borderColor: "var(--danger)" }}>
                <XIcon width={15} height={15} /> <Lang en="Reject" bn="বাতিল" />
              </button>
            </div>
          ) : (
            <button className="btn btn-ghost btn-sm" onClick={() => resolve(r.slug, "pending")}>
              <Lang en="Revoke" bn="প্রত্যাহার" />
            </button>
          )}
        </div>
      ))}
      <p style={{ fontSize: 12.5, color: "var(--muted)", marginTop: 4 }}>
        <Lang
          en={`${lawyers.length} lawyers total · verification checks Bangladesh Bar Council registration.`}
          bn={`মোট ${lawyers.length} জন আইনজীবী · যাচাই বাংলাদেশ বার কাউন্সিল নিবন্ধন পরীক্ষা করে।`}
        />
      </p>
    </div>
  );
}
