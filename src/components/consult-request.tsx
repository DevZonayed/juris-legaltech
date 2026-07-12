"use client";

import { useState } from "react";
import { Lang } from "@/components/lang";
import { useUI } from "@/components/ui-provider";
import { Disclaimer } from "@/components/ui";
import { ChatIcon, CheckCircleIcon } from "@/components/icons";
import type { Lawyer } from "@/lib/types";

export function ConsultRequest({ lawyer }: { lawyer: Lawyer }) {
  const { lang } = useUI();
  const [topic, setTopic] = useState("");
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="card" style={{ textAlign: "center" }}>
        <div
          className="emptyico"
          style={{ margin: "0 auto 12px", background: "var(--primary-soft)", color: "var(--primary)" }}
        >
          <CheckCircleIcon width={26} height={26} />
        </div>
        <div className="st-t" style={{ marginBottom: 6 }}>
          <Lang en="Request sent" bn="অনুরোধ পাঠানো হয়েছে" />
        </div>
        <p style={{ color: "var(--muted)", fontSize: 13.5, marginBottom: 14 }}>
          <Lang
            en={`${lawyer.name} will confirm your consultation shortly. You'll be notified in-app.`}
            bn={`${lawyer.name} শীঘ্রই আপনার পরামর্শ নিশ্চিত করবেন। আপনি অ্যাপে জানতে পারবেন।`}
          />
        </p>
        <button className="btn btn-ghost btn-sm" onClick={() => setSent(false)}>
          <Lang en="Send another" bn="আরেকটি পাঠান" />
        </button>
      </div>
    );
  }

  return (
    <div className="card">
      <h3 style={{ fontFamily: "var(--f-ui)", fontSize: 16, fontWeight: 800, marginBottom: 4 }}>
        <Lang en="Request a consultation" bn="পরামর্শের অনুরোধ" />
      </h3>
      <p style={{ color: "var(--muted)", fontSize: 13, marginBottom: 16 }}>
        <Lang en="Over secure in-app chat" bn="নিরাপদ ইন-অ্যাপ চ্যাটে" />
      </p>

      <div className="field" style={{ marginBottom: 14 }}>
        <label>
          <Lang en="Briefly, what do you need help with?" bn="সংক্ষেপে, কী বিষয়ে সাহায্য দরকার?" />
        </label>
        <textarea
          className="inp"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          placeholder={lang === "bn" ? "যেমন: ভাড়াটিয়া উচ্ছেদ নোটিশ…" : "e.g. Tenant eviction notice…"}
          style={{ height: 90, paddingTop: 10, alignItems: "flex-start", resize: "vertical", fontFamily: "var(--f-ui)" }}
        />
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "12px 0",
          borderTop: "1px solid var(--line)",
          borderBottom: "1px solid var(--line)",
          marginBottom: 16,
        }}
      >
        <span style={{ fontSize: 13, color: "var(--muted)" }}>
          <Lang en="Consultation fee" bn="পরামর্শ ফি" />
        </span>
        <b style={{ fontSize: 18 }}>৳{lawyer.feePerSession.toLocaleString()}</b>
      </div>

      <button className="btn btn-gold btn-block" onClick={() => setSent(true)}>
        <ChatIcon width={17} height={17} /> <Lang en="Request consultation" bn="পরামর্শ চান" />
      </button>
      <div style={{ marginTop: 14 }}>
        <Disclaimer />
      </div>
    </div>
  );
}
