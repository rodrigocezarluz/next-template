"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export default function useClipboard(duration: number = 3000) {
  const [copied, setCopied] = useState(false);
  const resetCopy = useRef<NodeJS.Timeout>();

  const onCopy = useCallback((text: string) => {
    navigator.clipboard.writeText(text).then(() => setCopied(true));
  }, []);

  useEffect(() => {
    if (copied) {
      resetCopy.current = setTimeout(() => setCopied(false), duration || 3000);
    }

    return () => {
      clearTimeout(resetCopy.current);
    };
  }, [copied, duration]);

  return { copied, onCopy };
}
