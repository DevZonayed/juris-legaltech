"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useUI } from "@/components/ui-provider";
import { SearchIcon, MicIcon } from "@/components/icons";

/** A search bar that routes to /search?q=… . Placeholder follows the active language. */
export function SearchLink({
  placeholderEn = "Search acts, sections…",
  placeholderBn = "আইন, ধারা খুঁজুন…",
  defaultValue = "",
  autoFocus = false,
}: {
  placeholderEn?: string;
  placeholderBn?: string;
  defaultValue?: string;
  autoFocus?: boolean;
}) {
  const router = useRouter();
  const { lang } = useUI();
  const [value, setValue] = useState(defaultValue);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const q = value.trim();
    router.push(q ? `/search?q=${encodeURIComponent(q)}` : "/search");
  }

  return (
    <form className="searchbar" onSubmit={submit}>
      <SearchIcon />
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={lang === "bn" ? placeholderBn : placeholderEn}
        aria-label={lang === "bn" ? placeholderBn : placeholderEn}
        // eslint-disable-next-line jsx-a11y/no-autofocus
        autoFocus={autoFocus}
      />
      <button type="button" className="mic" aria-label="Voice search">
        <MicIcon width={16} height={16} />
      </button>
    </form>
  );
}
