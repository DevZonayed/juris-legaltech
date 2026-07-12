"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Lang } from "@/components/lang";
import { Disclaimer, CitationChip } from "@/components/ui";
import {
  ChatIcon,
  PlusIcon,
  UsersIcon,
  MicIcon,
  SendIcon,
  ShieldCheckIcon,
  AlertTriangleIcon,
  ThumbsUpIcon,
  ThumbsDownIcon,
  FlagIcon,
  BookmarkIcon,
} from "@/components/icons";
import { useUI } from "@/components/ui-provider";
import { answerFor, chatHistory, suggestedPrompts } from "@/lib/mock/chat";
import type { ChatAnswer } from "@/lib/types";

interface UserMessage {
  role: "user";
  text: string;
}
interface AiMessage {
  role: "ai";
  answer: ChatAnswer;
}
type Message = UserMessage | AiMessage;

export default function AssistantPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const { lang } = useUI();
  const threadRef = useRef<HTMLDivElement>(null);
  const timer = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    threadRef.current?.scrollTo({ top: threadRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, typing]);

  useEffect(() => () => clearTimeout(timer.current), []);

  function send(text: string) {
    const q = text.trim();
    if (!q) return;
    setMessages((m) => [...m, { role: "user", text: q }]);
    setInput("");
    setTyping(true);
    timer.current = setTimeout(() => {
      setTyping(false);
      setMessages((m) => [...m, { role: "ai", answer: answerFor(q) }]);
    }, 950);
  }

  const started = messages.length > 0 || typing;

  return (
    <div className="assistant-full">
      <div className="assist">
        <aside className="side">
          <button className="btn btn-primary btn-sm btn-block new" onClick={() => setMessages([])}>
            <PlusIcon width={16} height={16} /> <Lang en="New chat" bn="নতুন চ্যাট" />
          </button>
          <div className="sh">
            <Lang en="Today" bn="আজ" />
          </div>
          {chatHistory
            .filter((h) => h.when === "today")
            .map((h, i) => (
              <button key={h.id} className={`hist ${i === 0 ? "on" : ""}`} type="button">
                <ChatIcon />
                {h.title}
              </button>
            ))}
          <div className="sh">
            <Lang en="Earlier" bn="পূর্ববর্তী" />
          </div>
          {chatHistory
            .filter((h) => h.when === "earlier")
            .map((h) => (
              <button key={h.id} className="hist" type="button">
                <ChatIcon />
                {h.title}
              </button>
            ))}
        </aside>

        <div className="conv">
          <div className="conv-head">
            <span className="avatar" style={{ background: "var(--primary)", width: 30, height: 30, fontSize: 12 }}>
              J
            </span>
            <div className="t">Juris Assistant</div>
            <Link className="btn btn-gold btn-sm lawyer-cta" href="/lawyers">
              <UsersIcon width={15} height={15} /> <Lang en="Talk to a lawyer" bn="আইনজীবীর সাথে কথা" />
            </Link>
          </div>

          <div className="thread" ref={threadRef}>
            <div className={`thread-inner ${started ? "" : "empty"}`}>
              {!started && <EmptyState onPick={send} />}

              {messages.map((m, i) =>
                m.role === "user" ? (
                  <div className="msg user" key={i}>
                    <span className="ava">You</span>
                    <div className="bubble">{m.text}</div>
                  </div>
                ) : (
                  <AiBubble key={i} answer={m.answer} />
                ),
              )}

              {typing && (
                <div className="msg ai">
                  <span className="ava">J</span>
                  <div className="bubble" style={{ padding: 0 }}>
                    <div className="typing">
                      <i />
                      <i />
                      <i />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <form
            className="composer"
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
          >
            <div className="composer-inner">
              <div className="box">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  aria-label="Ask a legal question"
                  placeholder={lang === "bn" ? "একটি আইনি প্রশ্ন করুন…" : "Ask a legal question…"}
                />
                <button type="button" className="mic" aria-label="Voice input">
                  <MicIcon width={16} height={16} />
                </button>
              </div>
              <button className="send" aria-label="Send" type="submit" disabled={!input.trim()}>
                <SendIcon width={18} height={18} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

function EmptyState({ onPick }: { onPick: (q: string) => void }) {
  return (
    <div
      style={{
        margin: "auto",
        maxWidth: 560,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        gap: 16,
        padding: "20px 0",
      }}
    >
      <span className="avatar" style={{ background: "var(--primary)", width: 56, height: 56, fontSize: 22 }}>
        J
      </span>
      <div>
        <h2 className="lang-en" style={{ fontSize: 26 }}>
          How can I help with the law today?
        </h2>
        <h2 className="lang-bn" style={{ fontSize: 26 }}>
          আজ আইনে কীভাবে সাহায্য করতে পারি?
        </h2>
        <p className="lang-en" style={{ color: "var(--muted)", fontSize: 14, marginTop: 8 }}>
          Ask anything — answers are grounded in verified Bangladesh law.
        </p>
        <p className="lang-bn" style={{ color: "var(--muted)", fontSize: 14, marginTop: 8, fontFamily: "var(--f-bn)" }}>
          যেকোনো কিছু জিজ্ঞাসা করুন — উত্তর যাচাইকৃত আইনের উপর ভিত্তি করে।
        </p>
      </div>
      <div className="suggests" style={{ justifyContent: "center" }}>
        {suggestedPrompts.map((p) => (
          <button key={p.query} className="sg" type="button" onClick={() => onPick(p.query)}>
            {p.emoji} <Lang en={p.label.en} bn={p.label.bn} />
          </button>
        ))}
      </div>
    </div>
  );
}

function AiBubble({ answer }: { answer: ChatAnswer }) {
  const [vote, setVote] = useState<"up" | "down" | null>(null);
  const [saved, setSaved] = useState(false);

  if (answer.kind === "no-verified") {
    return (
      <div className="msg ai" style={{ maxWidth: "100%" }}>
        <span className="ava" style={{ background: "var(--warn)", color: "#fff" }}>
          J
        </span>
        <div className="bubble" style={{ maxWidth: "100%" }}>
          <div className="noverify" style={{ marginTop: 0 }}>
            <div className="h">
              <AlertTriangleIcon width={18} height={18} />
              <Lang en={answer.label.en} bn={answer.label.bn} />
            </div>
            <p>
              <Lang en={answer.body.en} bn={answer.body.bn} />
            </p>
            <div className="acts">
              <Link className="btn btn-gold btn-sm" href="/lawyers">
                <UsersIcon width={15} height={15} /> <Lang en="Find a lawyer" bn="আইনজীবী খুঁজুন" />
              </Link>
              <button className="btn btn-ghost btn-sm" type="button">
                <Lang en="Rephrase question" bn="প্রশ্ন বদলান" />
              </button>
            </div>
          </div>
          <Disclaimer style={{ marginTop: 12 }} />
        </div>
      </div>
    );
  }

  return (
    <div className="msg ai">
      <span className="ava">J</span>
      <div className="bubble">
        <div className="ai-label">
          <ShieldCheckIcon width={14} height={14} />
          <Lang en={answer.label.en} bn={answer.label.bn} />
        </div>
        <Lang en={answer.body.en} bn={answer.body.bn} />
        {answer.bullets && answer.bullets.length > 0 && (
          <ul>
            {answer.bullets.map((b, i) => (
              <li key={i}>
                <Lang en={b.en} bn={b.bn} />
              </li>
            ))}
          </ul>
        )}
        {answer.citations && answer.citations.length > 0 && (
          <div className="cites">
            {answer.citations.map((c) =>
              c.href ? (
                <Link key={c.label} href={c.href}>
                  <CitationChip>{c.label}</CitationChip>
                </Link>
              ) : (
                <CitationChip key={c.label}>{c.label}</CitationChip>
              ),
            )}
          </div>
        )}
        <Disclaimer
          en="This is general information, not legal advice. Consult a lawyer for your specific case."
          bn="এই তথ্য শুধুমাত্র সাধারণ তথ্যের জন্য। এটি আইনি পরামর্শ নয়।"
        />
        <div className="feedback">
          <button className={`fbtn ${vote === "up" ? "on" : ""}`} aria-label="Helpful" onClick={() => setVote("up")}>
            <ThumbsUpIcon />
          </button>
          <button
            className={`fbtn ${vote === "down" ? "on" : ""}`}
            aria-label="Not helpful"
            onClick={() => setVote("down")}
          >
            <ThumbsDownIcon />
          </button>
          <button className="fbtn" aria-label="Report">
            <FlagIcon />
          </button>
          <span className="fb-spacer" />
          <button className={`fbtn ${saved ? "on" : ""}`} aria-label="Save" onClick={() => setSaved((s) => !s)}>
            <BookmarkIcon />
          </button>
        </div>
      </div>
    </div>
  );
}
