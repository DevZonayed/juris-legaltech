import Link from "next/link";
import { BrandMark } from "@/components/brand-mark";

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        textAlign: "center",
        padding: 24,
        background: "var(--paper)",
      }}
    >
      <div style={{ maxWidth: 420 }}>
        <BrandMark style={{ width: 56, height: 56, margin: "0 auto 20px" }} />
        <div style={{ fontFamily: "var(--f-mono)", color: "var(--muted)", fontSize: 13, marginBottom: 8 }}>404</div>
        <h1 style={{ fontSize: 30, marginBottom: 10 }}>Page not found</h1>
        <p style={{ color: "var(--muted)", marginBottom: 24 }}>
          The page you’re looking for doesn’t exist. It may have moved, or the link is out of date.
        </p>
        <Link className="btn btn-primary" href="/">
          Back to home
        </Link>
      </div>
    </div>
  );
}
