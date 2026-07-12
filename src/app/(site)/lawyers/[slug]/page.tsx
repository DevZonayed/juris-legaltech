import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Lang } from "@/components/lang";
import { VerifiedBadge, Stars } from "@/components/ui";
import { ConsultRequest } from "@/components/consult-request";
import { lawyers, getLawyer } from "@/lib/mock/lawyers";
import { ChevronRightIcon } from "@/components/icons";

export function generateStaticParams() {
  return lawyers.map((l) => ({ slug: l.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const l = getLawyer(params.slug);
  return { title: l ? l.name : "Lawyer" };
}

export default function LawyerPage({ params }: { params: { slug: string } }) {
  const lawyer = getLawyer(params.slug);
  if (!lawyer) notFound();

  return (
    <div className="wrap page">
      <div className="crumb" style={{ marginBottom: 20 }}>
        <Link href="/lawyers">
          <Lang en="Lawyers" bn="আইনজীবী" />
        </Link>
        <ChevronRightIcon />
        <span className="cur">{lawyer.name}</span>
      </div>

      <div className="grid" style={{ gridTemplateColumns: "1.6fr 1fr", gap: 26, alignItems: "start" }}>
        <div>
          <div className="card" style={{ marginBottom: 20 }}>
            <div style={{ display: "flex", gap: 18, alignItems: "center", flexWrap: "wrap" }}>
              <span className="avatar" style={{ background: lawyer.avatarColor, width: 72, height: 72, fontSize: 26 }}>
                {lawyer.initials}
              </span>
              <div>
                <h1 style={{ fontSize: 26, marginBottom: 6 }}>{lawyer.name}</h1>
                <div style={{ display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap" }}>
                  {lawyer.verified && <VerifiedBadge en="Bar Council verified" bn="বার কাউন্সিল যাচাইকৃত" />}
                  <Stars rating={lawyer.rating} count={lawyer.reviews} />
                  {lawyer.online && (
                    <span style={{ color: "var(--primary)", fontWeight: 700, fontSize: 13 }}>● Online</span>
                  )}
                </div>
              </div>
            </div>
            <div className="tag-row" style={{ marginTop: 16 }}>
              {lawyer.specialties.map((s) => (
                <span key={s.en} className="fpill" style={{ padding: "5px 12px", fontSize: 12 }}>
                  <Lang en={s.en} bn={s.bn} />
                </span>
              ))}
            </div>
          </div>

          <div className="grid-3" style={{ marginBottom: 20 }}>
            <div className="card" style={{ textAlign: "center" }}>
              <div style={{ fontSize: 24, fontWeight: 800, fontFamily: "var(--f-disp)" }}>{lawyer.experienceYears}</div>
              <div style={{ color: "var(--muted)", fontSize: 12.5 }}>
                <Lang en="Years experience" bn="বছরের অভিজ্ঞতা" />
              </div>
            </div>
            <div className="card" style={{ textAlign: "center" }}>
              <div style={{ fontSize: 24, fontWeight: 800, fontFamily: "var(--f-disp)" }}>{lawyer.reviews}</div>
              <div style={{ color: "var(--muted)", fontSize: 12.5 }}>
                <Lang en="Client reviews" bn="ক্লায়েন্ট রিভিউ" />
              </div>
            </div>
            <div className="card" style={{ textAlign: "center" }}>
              <div style={{ fontSize: 24, fontWeight: 800, fontFamily: "var(--f-disp)" }}>
                ৳{lawyer.feePerSession.toLocaleString()}
              </div>
              <div style={{ color: "var(--muted)", fontSize: 12.5 }}>
                <Lang en="Per session" bn="প্রতি সেশন" />
              </div>
            </div>
          </div>

          <div className="card">
            <h3 style={{ fontFamily: "var(--f-ui)", fontSize: 16, fontWeight: 800, marginBottom: 10 }}>
              <Lang en="About" bn="সম্পর্কে" />
            </h3>
            <p style={{ color: "var(--ink-2)", fontSize: 14.5, lineHeight: 1.7 }}>
              <Lang en={lawyer.bio.en} bn={lawyer.bio.bn} />
            </p>
            <div style={{ marginTop: 16, display: "flex", gap: 20, flexWrap: "wrap", fontSize: 13 }}>
              <div>
                <div style={{ color: "var(--muted)", fontSize: 12 }}>
                  <Lang en="Location" bn="অবস্থান" />
                </div>
                <b>
                  <Lang en={lawyer.location.en} bn={lawyer.location.bn} />
                </b>
              </div>
              <div>
                <div style={{ color: "var(--muted)", fontSize: 12 }}>
                  <Lang en="Languages" bn="ভাষা" />
                </div>
                <b>{lawyer.languages.join(", ")}</b>
              </div>
            </div>
          </div>
        </div>

        <ConsultRequest lawyer={lawyer} />
      </div>
    </div>
  );
}
