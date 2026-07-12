"use client";

import { useState } from "react";
import { Lang } from "@/components/lang";
import { acts } from "@/lib/mock/acts";
import { CheckIcon } from "@/components/icons";

interface DraftField {
  labelEn: string;
  labelBn: string;
  key: "title" | "body" | "plain" | "example";
  multiline?: boolean;
}

const FIELDS: DraftField[] = [
  { labelEn: "Section title", labelBn: "ধারার শিরোনাম", key: "title" },
  { labelEn: "Authoritative text", labelBn: "মূল পাঠ", key: "body", multiline: true },
  { labelEn: "Plain-language explanation", labelBn: "সহজ ভাষার ব্যাখ্যা", key: "plain", multiline: true },
  { labelEn: "Example", labelBn: "উদাহরণ", key: "example", multiline: true },
];

export function AdminLawCms() {
  const flat = acts.flatMap((a) => a.sections.map((s) => ({ act: a, section: s })));
  const [selected, setSelected] = useState(flat.find((f) => f.section.slug === "s-420") ?? flat[0]);
  const [verified, setVerified] = useState(selected.section.verified);
  const [saved, setSaved] = useState(false);

  function pick(f: (typeof flat)[number]) {
    setSelected(f);
    setVerified(f.section.verified);
    setSaved(false);
  }

  const s = selected.section;

  return (
    <div className="cms-layout">
      {/* Section picker */}
      <aside className="cms-sidebar">
        <div className="csh">
          <Lang en="Sections" bn="ধারা" />
        </div>
        <div className="cms-list">
          {flat.map((f) => {
            const on = f.section.slug === s.slug && f.act.slug === selected.act.slug;
            return (
              <button key={`${f.act.slug}-${f.section.slug}`} className={`cms-sec ${on ? "on" : ""}`} onClick={() => pick(f)}>
                <span className="cms-badge">§{f.section.number}</span>
                <span className="cms-nm">
                  <Lang en={f.section.title.en} bn={f.section.title.bn} />
                </span>
              </button>
            );
          })}
        </div>
      </aside>

      {/* Bilingual editor */}
      <div className="card2 cms-editor">
        <div className="c2h">
          <b>
            <Lang en={selected.act.title.en} bn={selected.act.title.bn} /> · §{s.number}
          </b>
          <span className="lnk" style={{ fontFamily: "var(--f-mono)", fontSize: 11.5 }}>
            admin.juris.com.bd/cms
          </span>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          <div className="pair-head">English</div>
          <div className="pair-head" style={{ fontFamily: "var(--f-bn)" }}>
            বাংলা
          </div>

          {FIELDS.map((f) => (
            <FieldPair
              key={f.key}
              field={f}
              en={(s[f.key]?.en as string) ?? ""}
              bn={(s[f.key]?.bn as string) ?? ""}
              editKey={`${selected.act.slug}-${s.slug}`}
              onChange={() => setSaved(false)}
            />
          ))}
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 14, marginTop: 20, paddingTop: 16, borderTop: "1px solid var(--line)", flexWrap: "wrap" }}>
          <label style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 13, fontWeight: 600 }}>
            <button
              type="button"
              className={`switch ${verified ? "on" : ""}`}
              onClick={() => {
                setVerified((v) => !v);
                setSaved(false);
              }}
              aria-label="Verified toggle"
            >
              <i />
            </button>
            <Lang en="Verified source" bn="যাচাইকৃত উৎস" />
          </label>
          <span style={{ marginLeft: "auto", display: "flex", gap: 10, alignItems: "center" }}>
            {saved && (
              <span className="pillstat ok" style={{ marginLeft: 0 }}>
                <Lang en="Saved" bn="সংরক্ষিত" />
              </span>
            )}
            <button className="btn btn-primary btn-sm" onClick={() => setSaved(true)}>
              <CheckIcon width={15} height={15} /> <Lang en="Save & publish" bn="সংরক্ষণ ও প্রকাশ" />
            </button>
          </span>
        </div>
      </div>
    </div>
  );
}

function FieldPair({
  field,
  en,
  bn,
  editKey,
  onChange,
}: {
  field: DraftField;
  en: string;
  bn: string;
  editKey: string;
  onChange: () => void;
}) {
  const h = field.key === "body" ? 130 : 84;
  return (
    <>
      <div className="field" style={{ marginBottom: 4 }}>
        <label>{field.labelEn}</label>
        {field.multiline ? (
          <textarea
            key={`${editKey}-en`}
            className="inp"
            defaultValue={en}
            onChange={onChange}
            style={{ height: h, paddingTop: 10, alignItems: "flex-start", resize: "vertical", fontFamily: "var(--f-ui)", lineHeight: 1.5 }}
          />
        ) : (
          <input key={`${editKey}-en`} className="inp" defaultValue={en} onChange={onChange} />
        )}
      </div>
      <div className="field" style={{ marginBottom: 4 }}>
        <label style={{ fontFamily: "var(--f-bn)" }}>{field.labelBn}</label>
        {field.multiline ? (
          <textarea
            key={`${editKey}-bn`}
            className="inp bn"
            defaultValue={bn}
            onChange={onChange}
            style={{ height: h, paddingTop: 10, alignItems: "flex-start", resize: "vertical", fontFamily: "var(--f-bn)", lineHeight: 1.6 }}
          />
        ) : (
          <input key={`${editKey}-bn`} className="inp bn" defaultValue={bn} onChange={onChange} style={{ fontFamily: "var(--f-bn)" }} />
        )}
      </div>
    </>
  );
}
