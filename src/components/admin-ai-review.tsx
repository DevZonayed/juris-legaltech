"use client";

import { useState } from "react";
import { Lang } from "@/components/lang";
import { flaggedAnswers } from "@/lib/mock/admin";
import { CheckIcon, XIcon, FlagIcon, ShieldCheckIcon } from "@/components/icons";

type Resolution = "approved" | "removed" | null;

export function AdminAiReview() {
  const [resolved, setResolved] = useState<Record<string, Resolution>>({});

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      {flaggedAnswers.map((a) => {
        const res = resolved[a.id];
        return (
          <div className="card2" key={a.id} style={{ opacity: res ? 0.6 : 1 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12, flexWrap: "wrap" }}>
              <span className="sec-no mono" style={{ color: "var(--muted)" }}>
                #{a.id}
              </span>
              <span className={`pillstat ${a.status}`} style={{ marginLeft: 0 }}>
                {res ? (res === "approved" ? "Approved" : "Removed") : a.statusLabel}
              </span>
              <span className="role-pill">{a.category}</span>
              <span style={{ marginLeft: "auto", fontSize: 12, color: "var(--muted)", display: "flex", alignItems: "center", gap: 8 }}>
                <Lang en="Confidence" bn="আস্থা" />
                <span
                  style={{
                    width: 90,
                    height: 8,
                    borderRadius: 999,
                    background: "var(--surface-2)",
                    overflow: "hidden",
                    display: "inline-block",
                  }}
                >
                  <span
                    style={{
                      display: "block",
                      height: "100%",
                      width: `${a.confidence}%`,
                      background: a.confidence < 50 ? "var(--danger)" : a.confidence < 70 ? "var(--warn)" : "var(--primary)",
                    }}
                  />
                </span>
                <b className="mono">{a.confidence}%</b>
              </span>
            </div>

            <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 8 }}>{a.question}</div>
            <div
              style={{
                fontSize: 13.5,
                color: "var(--ink-2)",
                lineHeight: 1.6,
                background: "var(--surface-2)",
                border: "1px solid var(--line)",
                borderLeft: "3px solid var(--primary)",
                borderRadius: "var(--r-sm)",
                padding: "12px 14px",
                marginBottom: 12,
              }}
            >
              {a.answerExcerpt}
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 12.5, color: "var(--warn)", marginBottom: 16 }}>
              <FlagIcon width={14} height={14} />
              {a.reason}
            </div>

            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              <button
                className="btn btn-primary btn-sm"
                disabled={!!res}
                onClick={() => setResolved((r) => ({ ...r, [a.id]: "approved" }))}
              >
                <CheckIcon width={15} height={15} /> <Lang en="Approve answer" bn="উত্তর অনুমোদন" />
              </button>
              <button
                className="btn btn-ghost btn-sm"
                disabled={!!res}
                onClick={() => setResolved((r) => ({ ...r, [a.id]: "removed" }))}
                style={{ color: "var(--danger)", borderColor: "var(--danger)" }}
              >
                <XIcon width={15} height={15} /> <Lang en="Remove & retrain" bn="সরান ও পুনঃপ্রশিক্ষণ" />
              </button>
              <button className="btn btn-ghost btn-sm" disabled={!!res}>
                <ShieldCheckIcon width={15} height={15} /> <Lang en="Send to expert" bn="বিশেষজ্ঞকে পাঠান" />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
