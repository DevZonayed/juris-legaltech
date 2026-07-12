"use client";

import { useEffect } from "react";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    // In a real app this would report to an error tracker.
    console.error(error);
  }, [error]);

  return (
    <div style={{ minHeight: "100vh", display: "grid", placeItems: "center", textAlign: "center", padding: 24 }}>
      <div style={{ maxWidth: 420 }}>
        <div
          className="emptyico"
          style={{ margin: "0 auto 16px", background: "var(--danger-soft)", color: "var(--danger)" }}
        >
          <svg viewBox="0 0 24 24" width={26} height={26} fill="none" stroke="currentColor" strokeWidth={2}>
            <path d="M12 9v4M12 17h.01" />
            <path d="M10.3 3.9 2 18a2 2 0 0 0 1.7 3h16.6a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z" />
          </svg>
        </div>
        <h1 style={{ fontSize: 26, marginBottom: 10 }}>Something went wrong</h1>
        <p style={{ color: "var(--muted)", marginBottom: 24 }}>We couldn’t load this. Please retry.</p>
        <button className="btn btn-primary" onClick={reset}>
          Retry
        </button>
      </div>
    </div>
  );
}
