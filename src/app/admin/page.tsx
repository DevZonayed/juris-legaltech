import { Lang } from "@/components/lang";
import { UsersIcon, ChatIcon, AlertTriangleIcon, BarChartIcon } from "@/components/icons";
import { kpis, questionsPerDay, verificationQueue, coverageGaps } from "@/lib/mock/admin";
import type { Kpi } from "@/lib/mock/admin";

function KpiIcon({ name }: { name: Kpi["icon"] }) {
  const size = { width: 14, height: 14 };
  switch (name) {
    case "users":
      return <UsersIcon {...size} />;
    case "chat":
      return <ChatIcon {...size} />;
    case "flag":
      return <AlertTriangleIcon {...size} />;
    case "gap":
      return <BarChartIcon {...size} />;
  }
}

export default function AdminDashboard() {
  return (
    <>
      <div className="ahead">
        <h1>
          <Lang en="Overview" bn="সারসংক্ষেপ" />
        </h1>
        <span className="badge2fa" style={{ marginLeft: "auto" }}>
          🔒 <Lang en="2FA session" bn="2FA সেশন" />
        </span>
      </div>

      <div className="kpis">
        {kpis.map((k) => (
          <div className="kpi" key={k.label.en}>
            <div className="kl">
              <KpiIcon name={k.icon} />
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
              <Lang en="Verification queue" bn="যাচাই সারি" />
            </b>
            <span className="lnk">
              <Lang en="View all" bn="সব দেখুন" />
            </span>
          </div>
          <div className="queue">
            {verificationQueue.map((q, i) => (
              <div className="qi" key={i}>
                <span className="qa" style={{ background: q.color }}>
                  {q.initials}
                </span>
                <div>
                  <div className="qt">{q.title}</div>
                  <div className="qs">{q.sub}</div>
                </div>
                <span className={`pillstat ${q.status}`}>{q.statusLabel}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="card2" style={{ marginTop: 16 }}>
        <div className="c2h">
          <b>
            <Lang
              en="Coverage-gap report — popular questions with no law data"
              bn="কভারেজ-গ্যাপ রিপোর্ট — যে প্রশ্নে আইন নেই"
            />
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
                <Lang en="Asks (7d)" bn="জিজ্ঞাসা (৭দি)" />
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
