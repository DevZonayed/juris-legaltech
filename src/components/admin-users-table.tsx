"use client";

import { useState } from "react";
import { Lang } from "@/components/lang";
import { useUI } from "@/components/ui-provider";
import { adminUsers } from "@/lib/mock/admin";
import { SearchIcon } from "@/components/icons";

export function AdminUsersTable() {
  const { lang } = useUI();
  const [q, setQ] = useState("");
  const [role, setRole] = useState<string>("All");

  const roles = ["All", "User", "Lawyer", "Editor", "Admin"];
  const shown = adminUsers.filter(
    (u) =>
      (role === "All" || u.role === role) &&
      (u.name.toLowerCase().includes(q.toLowerCase()) || u.email.toLowerCase().includes(q.toLowerCase())),
  );

  return (
    <>
      <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 18, alignItems: "center" }}>
        <div style={{ position: "relative" }}>
          <SearchIcon width={15} height={15} style={{ position: "absolute", left: 12, top: 12, color: "var(--muted)" }} />
          <input
            className="filter-input"
            style={{ paddingLeft: 34 }}
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder={lang === "bn" ? "নাম বা ইমেইল খুঁজুন…" : "Search name or email…"}
          />
        </div>
        <div className="filters" style={{ margin: 0 }}>
          {roles.map((r) => (
            <button key={r} className={`fpill ${role === r ? "on" : ""}`} onClick={() => setRole(r)}>
              {r}
            </button>
          ))}
        </div>
        <span style={{ marginLeft: "auto", fontSize: 12.5, color: "var(--muted)" }}>
          {shown.length} <Lang en="users" bn="ব্যবহারকারী" />
        </span>
      </div>

      <div className="card2" style={{ padding: 0, overflowX: "auto" }}>
        <table className="dt">
          <thead>
            <tr>
              <th>
                <Lang en="User" bn="ব্যবহারকারী" />
              </th>
              <th>
                <Lang en="Role" bn="ভূমিকা" />
              </th>
              <th>
                <Lang en="Joined" bn="যোগদান" />
              </th>
              <th>
                <Lang en="Questions" bn="প্রশ্ন" />
              </th>
              <th>
                <Lang en="Status" bn="অবস্থা" />
              </th>
            </tr>
          </thead>
          <tbody>
            {shown.map((u) => (
              <tr key={u.email}>
                <td>
                  <div className="u">
                    <span className="avatar" style={{ width: 32, height: 32, fontSize: 12, background: u.color }}>
                      {u.initials}
                    </span>
                    <div>
                      <div style={{ fontWeight: 700 }}>{u.name}</div>
                      <div style={{ fontSize: 11.5, color: "var(--muted)" }}>{u.email}</div>
                    </div>
                  </div>
                </td>
                <td>
                  <span className={`role-pill ${u.role}`}>{u.role}</span>
                </td>
                <td style={{ color: "var(--muted)" }}>{u.joined}</td>
                <td className="mono">{u.questions}</td>
                <td>
                  <span
                    className={`pillstat ${u.status === "active" ? "ok" : u.status === "pending" ? "pending" : "flag"}`}
                  >
                    {u.status === "active" ? "Active" : u.status === "pending" ? "Pending" : "Suspended"}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
