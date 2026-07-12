import { SiteHeader } from "@/components/site-header";
import { Lang } from "@/components/lang";
import { ShieldCheckIcon, GlobeIcon, UsersIcon } from "@/components/icons";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SiteHeader />
      <main>
        <div className="auth-shell">
          <aside className="auth-visual">
            <div>
              <span
                className="badge-verified"
                style={{ background: "rgba(255,255,255,.16)", color: "#fff", marginBottom: 24 }}
              >
                <ShieldCheckIcon width={13} height={13} /> Juris · বাংলাদেশ আইন
              </span>
              <p className="av-quote">
                <Lang en="Verified Bangladesh law, answered." bn="যাচাই করা বাংলাদেশ আইন, এখন সহজ।" />
              </p>
              <div className="av-list">
                <div className="avi">
                  <ShieldCheckIcon width={20} height={20} />
                  <Lang en="Every answer cites the Act & Section" bn="প্রতিটি উত্তরে আইন ও ধারা উদ্ধৃত" />
                </div>
                <div className="avi">
                  <GlobeIcon width={20} height={20} />
                  <Lang en="বাংলা + English, one system" bn="বাংলা ও ইংরেজি, এক সিস্টেম" />
                </div>
                <div className="avi">
                  <UsersIcon width={20} height={20} />
                  <Lang en="Consult Bar-verified lawyers" bn="বার-যাচাইকৃত আইনজীবীর পরামর্শ" />
                </div>
              </div>
            </div>
            <div style={{ fontSize: 12.5, opacity: 0.8 }}>Ref NLX-LEGALTECH · NexaLance</div>
          </aside>
          <div className="auth-form">
            <div className="inner">{children}</div>
          </div>
        </div>
      </main>
    </>
  );
}
