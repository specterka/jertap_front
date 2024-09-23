import { useState } from "react";

export function useClipboard() {
  const [copiedText, setCopiedText] = useState(null);

  const copy = async (text) => {
    if (!navigator?.clipboard) {
      console.warn("Clipboard not supported");
      return false;
    }

    // Try to save to clipboard then save it in the state if worked
    try {
      await navigator.clipboard.writeText(text);
      setCopiedText(text);
      return true;
    } catch (error) {
      setCopiedText(null);
      return false;
    }
  };

  return { copiedText, copy };
}
