"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Lang } from "@/components/lang";
import { GoogleIcon } from "@/components/icons";

export default function SignupPage() {
  const router = useRouter();
  const [agree, setAgree] = useState(true);

  return (
    <div>
      <h1 style={{ fontSize: 30, marginBottom: 8 }}>
        <Lang en="Create your account" bn="আপনার অ্যাকাউন্ট তৈরি করুন" />
      </h1>
      <p style={{ color: "var(--muted)", marginBottom: 26 }}>
        <Lang en="Free to start. No card required." bn="শুরু করা ফ্রি। কার্ড লাগবে না।" />
      </p>

      <button className="social-btn" onClick={() => router.push("/verify")}>
        <GoogleIcon /> <Lang en="Sign up with Google" bn="গুগল দিয়ে সাইন আপ" />
      </button>

      <div className="or-line">
        <Lang en="or" bn="অথবা" />
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          router.push("/verify");
        }}
      >
        <div className="field" style={{ marginBottom: 14 }}>
          <label>
            <Lang en="Full name" bn="পুরো নাম" />
          </label>
          <input className="inp" placeholder="Arif Rahman" required />
        </div>
        <div className="field" style={{ marginBottom: 14 }}>
          <label>
            <Lang en="Mobile number *" bn="মোবাইল নম্বর *" />
          </label>
          <input className="inp mono" placeholder="+880 1XXX-XXXXXX" required />
          <span className="hint">
            <Lang en="We'll send a one-time code." bn="আমরা একটি কোড পাঠাব।" />
          </span>
        </div>
        <div className="field" style={{ marginBottom: 16 }}>
          <label>
            <Lang en="Password" bn="পাসওয়ার্ড" />
          </label>
          <input className="inp" type="password" placeholder="••••••••" required />
        </div>

        <label style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 20, fontSize: 12.5, color: "var(--ink-2)" }}>
          <input type="checkbox" checked={agree} onChange={(e) => setAgree(e.target.checked)} style={{ marginTop: 3 }} />
          <span>
            <Lang
              en="I agree to the Terms of Service and Privacy Policy, and understand AI answers are general information."
              bn="আমি সেবার শর্ত ও প্রাইভেসি নীতিতে সম্মত এবং জানি এআই উত্তর সাধারণ তথ্য।"
            />
          </span>
        </label>

        <button className="btn btn-primary btn-block" type="submit" disabled={!agree}>
          <Lang en="Create account" bn="অ্যাকাউন্ট তৈরি" />
        </button>
      </form>

      <p style={{ textAlign: "center", marginTop: 22, fontSize: 13.5, color: "var(--muted)" }}>
        <Lang en="Already have an account?" bn="ইতিমধ্যে অ্যাকাউন্ট আছে?" />{" "}
        <Link href="/login" style={{ color: "var(--primary)", fontWeight: 700 }}>
          <Lang en="Sign in" bn="সাইন ইন" />
        </Link>
      </p>
    </div>
  );
}
