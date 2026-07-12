"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Lang } from "@/components/lang";
import { GoogleIcon, MailIcon, LockIcon } from "@/components/icons";

export default function LoginPage() {
  const router = useRouter();
  const [id, setId] = useState("");

  return (
    <div>
      <h1 style={{ fontSize: 30, marginBottom: 8 }}>
        <Lang en="Welcome back" bn="আবার স্বাগতম" />
      </h1>
      <p style={{ color: "var(--muted)", marginBottom: 26 }}>
        <Lang en="Sign in to continue to Juris." bn="জুরিসে চালিয়ে যেতে সাইন ইন করুন।" />
      </p>

      <button className="social-btn" onClick={() => router.push("/")}>
        <GoogleIcon /> <Lang en="Continue with Google" bn="গুগল দিয়ে চালিয়ে যান" />
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
        <div className="field" style={{ marginBottom: 16 }}>
          <label>
            <Lang en="Email or mobile number" bn="ইমেইল বা মোবাইল নম্বর" />
          </label>
          <div style={{ position: "relative" }}>
            <MailIcon
              width={16}
              height={16}
              style={{ position: "absolute", left: 13, top: 14, color: "var(--muted)" }}
            />
            <input
              className="inp"
              style={{ paddingLeft: 38 }}
              value={id}
              onChange={(e) => setId(e.target.value)}
              placeholder="you@example.com"
              required
            />
          </div>
        </div>

        <div className="field" style={{ marginBottom: 10 }}>
          <label>
            <Lang en="Password" bn="পাসওয়ার্ড" />
          </label>
          <div style={{ position: "relative" }}>
            <LockIcon
              width={16}
              height={16}
              style={{ position: "absolute", left: 13, top: 14, color: "var(--muted)" }}
            />
            <input className="inp" style={{ paddingLeft: 38 }} type="password" placeholder="••••••••" />
          </div>
        </div>

        <div style={{ textAlign: "right", marginBottom: 20 }}>
          <Link href="/verify" style={{ fontSize: 12.5, color: "var(--primary)", fontWeight: 700 }}>
            <Lang en="Forgot password?" bn="পাসওয়ার্ড ভুলে গেছেন?" />
          </Link>
        </div>

        <button className="btn btn-primary btn-block" type="submit">
          <Lang en="Sign in" bn="সাইন ইন" />
        </button>
      </form>

      <p style={{ textAlign: "center", marginTop: 22, fontSize: 13.5, color: "var(--muted)" }}>
        <Lang en="New to Juris?" bn="জুরিসে নতুন?" />{" "}
        <Link href="/signup" style={{ color: "var(--primary)", fontWeight: 700 }}>
          <Lang en="Create an account" bn="অ্যাকাউন্ট তৈরি করুন" />
        </Link>
      </p>
    </div>
  );
}
