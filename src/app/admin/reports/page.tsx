import { Lang } from "@/components/lang";
import { questionsPerDay, coverageGaps, kpis } from "@/lib/mock/admin";
import { categories } from "@/lib/mock/categories";

export default function AdminReportsPage() {
  const maxCat = Math.max(...categories.map((c) => c.count));
  return (
    <>
      <div className="ahead">
        <h1>
          <Lang en="Reports & analytics" bn="রিপোর্ট ও বিশ্লেষণ" />
        </h1>
        <span className="badge2fa" style={{ marginLeft: "auto" }}>
          <Lang en="Last 30 days" bn="গত ৩০ দিন" />
        </span>
      </div>

      <div className="kpis" style={{ marginBottom: 20 }}>
        {kpis.map((k) => (
          <div className="kpi" key={k.label.en}>
            <div className="kl">
              <Lang en={k.label.en} bn={k.label.bn} />
            </div>
            <div className="kv mono">{k.value}</div>
            <div className={`kd ${k.trend}`}>{k.delta}</div>
          </div>
        ))}
      </div>

      <div className="admin-2col">
        <div className="card2">
          <div className="c2h">
            <b>
              <Lang en="Questions per day" bn="দৈনিক প্রশ্ন" />
            </b>
            <span className="lnk">
              <Lang en="Last 7 days" bn="গত ৭ দিন" />
            </span>
          </div>
          <div className="chart">
            {questionsPerDay.map((c) => (
              <div className="col" key={c.x}>
                <div className="b" style={{ height: `${c.pct}%` }}>
                  <span className="v">{c.value}</span>
                </div>
                <div className="x">{c.x}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="card2">
          <div className="c2h">
            <b>
              <Lang en="Coverage by category" bn="বিভাগ অনুযায়ী কভারেজ" />
            </b>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 11 }}>
            {categories.slice(0, 6).map((c) => (
              <div key={c.id} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ width: 120, fontSize: 12.5, fontWeight: 600 }}>
                  <Lang en={c.name.en} bn={c.name.bn} />
                </span>
                <span style={{ flex: 1, height: 10, background: "var(--surface-2)", borderRadius: 999, overflow: "hidden" }}>
                  <span style={{ display: "block", height: "100%", width: `${(c.count / maxCat) * 100}%`, background: c.color }} />
                </span>
                <b className="mono" style={{ fontSize: 12, width: 28, textAlign: "right" }}>
                  {c.count}
                </b>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="card2" style={{ marginTop: 16 }}>
        <div className="c2h">
          <b>
            <Lang en="Top coverage gaps" bn="প্রধান কভারেজ গ্যাপ" />
          </b>
          <span className="lnk">
            <Lang en="Export CSV" bn="CSV এক্সপোর্ট" />
          </span>
        </div>
        <table className="dt">
          <thead>
            <tr>
              <th>
                <Lang en="Query" bn="প্রশ্ন" />
              </th>
              <th>
                <Lang en="Asks (7d)" bn="জিজ্ঞাসা" />
              </th>
              <th>
                <Lang en="Category" bn="বিভাগ" />
              </th>
              <th>
                <Lang en="Status" bn="অবস্থা" />
              </th>
            </tr>
          </thead>
          <tbody>
            {coverageGaps.map((g, i) => (
              <tr key={i}>
                <td className="u">{g.query}</td>
                <td className="mono">{g.asks}</td>
                <td>{g.category}</td>
                <td>
                  <span className={`pillstat ${g.status}`}>{g.statusLabel}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
