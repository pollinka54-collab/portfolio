import { useState } from "react";
import { speaker } from "@/content/speaker";

type CopyState = "idle" | "copied" | "failed";

export function CopyBioButton() {
  const [state, setState] = useState<CopyState>("idle");

  async function copyBio() {
    try {
      if (typeof navigator !== "undefined" && navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(speaker.bio);
      } else if (typeof document !== "undefined") {
        const field = document.createElement("textarea");
        field.value = speaker.bio;
        field.setAttribute("readonly", "");
        field.style.position = "fixed";
        field.style.opacity = "0";
        document.body.append(field);
        field.select();
        const copied = document.execCommand("copy");
        field.remove();
        if (!copied) throw new Error("Copy command failed");
      } else {
        throw new Error("Clipboard unavailable");
      }
      setState("copied");
    } catch {
      setState("failed");
    }
    window.setTimeout(() => setState("idle"), 2200);
  }

  const label =
    state === "copied"
      ? "Био скопировано"
      : state === "failed"
        ? "Не удалось скопировать"
        : "Скопировать краткое био";

  return (
    <button className="copy-bio" type="button" onClick={copyBio}>
      <span aria-live="polite">{label}</span>
      <span className="copy-mark" aria-hidden="true">{state === "copied" ? "✓" : "⌘"}</span>
    </button>
  );
}
