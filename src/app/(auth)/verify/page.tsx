"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Lang } from "@/components/lang";
import { OtpInput } from "@/components/otp-input";

export default function VerifyPage() {
  const router = useRouter();
  const [code, setCode] = useState("");

  return (
    <div>
      {/* Stepper */}
      <div className="stepper" style={{ marginBottom: 8 }}>
        <div className="st done">
          <span className="dot">
            <svg width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3}>
              <path d="M20 6L9 17l-5-5" />
            </svg>
          </span>
        </div>
        <div className="bar fill" />
        <div className="st now">
          <span className="dot">2</span>
        </div>
        <div className="bar" />
        <div className="st">
          <span className="dot">3</span>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 10.5, fontWeight: 700, color: "var(--muted)", marginBottom: 28 }}>
        <span>
          <Lang en="Details" bn="তথ্য" />
        </span>
        <span style={{ color: "var(--primary)" }}>
          <Lang en="Verify" bn="যাচাই" />
        </span>
        <span>
          <Lang en="Done" bn="সম্পন্ন" />
        </span>
      </div>

      <h1 style={{ fontSize: 28, marginBottom: 8 }}>
        <Lang en="Verify your number" bn="আপনার নম্বর যাচাই করুন" />
      </h1>
      <p style={{ color: "var(--muted)", marginBottom: 26 }}>
        <Lang
          en="We sent a 6-digit code to +880 1712-345678. Enter it below."
          bn="আমরা +৮৮০ ১৭১২-৩৪৫৬৭৮ এ ৬-সংখ্যার কোড পাঠিয়েছি। নিচে লিখুন।"
        />
      </p>

      <OtpInput onComplete={setCode} />

      <button
        className="btn btn-primary btn-block"
        style={{ marginTop: 26 }}
        disabled={code.length !== 6}
        onClick={() => router.push("/")}
      >
        <Lang en="Verify & continue" bn="যাচাই করে চালিয়ে যান" />
      </button>

      <p style={{ textAlign: "center", marginTop: 20, fontSize: 13.5, color: "var(--muted)" }}>
        <Lang en="Didn't get the code?" bn="কোড পাননি?" />{" "}
        <button style={{ color: "var(--primary)", fontWeight: 700, background: "none", border: 0, cursor: "pointer" }}>
          <Lang en="Resend" bn="আবার পাঠান" />
        </button>
      </p>
    </div>
  );
}
