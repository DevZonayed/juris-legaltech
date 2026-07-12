import { Lang } from "@/components/lang";
import { LockIcon, UsersIcon, ShieldCheckIcon, BellIcon } from "@/components/icons";

const roles = [
  { role: "Admin", en: "Full access — users, CMS, AI review, settings", bn: "সম্পূর্ণ অ্যাক্সেস", people: 2 },
  { role: "Editor", en: "Law CMS & coverage gaps only", bn: "শুধু ল CMS ও কভারেজ গ্যাপ", people: 5 },
  { role: "Reviewer", en: "AI answer review & flags", bn: "শুধু এআই উত্তর পর্যালোচনা", people: 3 },
  { role: "Verifier", en: "Lawyer verification queue", bn: "শুধু আইনজীবী যাচাই", people: 2 },
];

export default function AdminSettingsPage() {
  return (
    <>
      <div className="ahead">
        <h1>
          <Lang en="Settings & access control" bn="সেটিংস ও অ্যাক্সেস নিয়ন্ত্রণ" />
        </h1>
      </div>

      <div className="admin-2col">
        <div className="card2">
          <div className="c2h">
            <b>
              <Lang en="Roles (RBAC)" bn="ভূমিকা (RBAC)" />
            </b>
          </div>
          <div className="queue">
            {roles.map((r) => (
              <div className="qi" key={r.role}>
                <span className="qa" style={{ background: "var(--primary)" }}>
                  <UsersIcon width={16} height={16} />
                </span>
                <div>
                  <div className="qt">{r.role}</div>
                  <div className="qs">
                    <Lang en={r.en} bn={r.bn} />
                  </div>
                </div>
                <span className="pillstat ok">{r.people} people</span>
              </div>
            ))}
          </div>
        </div>

        <div className="card2">
          <div className="c2h">
            <b>
              <Lang en="Security" bn="নিরাপত্তা" />
            </b>
          </div>
          <div className="queue">
            <div className="qi">
              <span className="qa" style={{ background: "var(--primary-deep)" }}>
                <LockIcon width={16} height={16} />
              </span>
              <div>
                <div className="qt">
                  <Lang en="Two-factor authentication" bn="টু-ফ্যাক্টর অথেন্টিকেশন" />
                </div>
                <div className="qs">
                  <Lang en="Required for all admins" bn="সব অ্যাডমিনের জন্য বাধ্যতামূলক" />
                </div>
              </div>
              <span className="pillstat ok">
                <Lang en="Enforced" bn="বলবৎ" />
              </span>
            </div>
            <div className="qi">
              <span className="qa" style={{ background: "var(--gold-2)" }}>
                <ShieldCheckIcon width={16} height={16} />
              </span>
              <div>
                <div className="qt">
                  <Lang en="Audit logging" bn="অডিট লগিং" />
                </div>
                <div className="qs">
                  <Lang en="All content changes recorded" bn="সব কনটেন্ট পরিবর্তন রেকর্ড হয়" />
                </div>
              </div>
              <span className="pillstat ok">
                <Lang en="On" bn="চালু" />
              </span>
            </div>
            <div className="qi">
              <span className="qa" style={{ background: "var(--info)" }}>
                <BellIcon width={16} height={16} />
              </span>
              <div>
                <div className="qt">
                  <Lang en="Flag alerts" bn="ফ্ল্যাগ সতর্কতা" />
                </div>
                <div className="qs">
                  <Lang en="Notify reviewers on low-confidence answers" bn="কম-আস্থার উত্তরে রিভিউয়ারদের জানানো" />
                </div>
              </div>
              <span className="pillstat pending">
                <Lang en="Email" bn="ইমেইল" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
