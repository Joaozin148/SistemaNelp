/* eslint-disable @typescript-eslint/no-explicit-any */
// app/_components/vlibras.tsx
"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    VLibras: {
      Widget: new (url: string) => any;
    };
  }
}

export default function VLibrasWidget() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://vlibras.gov.br/app/vlibras-plugin.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      new window.VLibras.Widget("https://vlibras.gov.br/app");
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
}
