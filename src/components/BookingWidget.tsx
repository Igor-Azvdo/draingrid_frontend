"use client";

import { useEffect, useState } from "react";

function buildSrc() {
  const base = "https://app.clinicweed.com.br/agendar/draingridazevedo?bare=1";
  if (typeof window === "undefined") return base;
  const params = new URLSearchParams(window.location.search);
  const attrs = ["fbclid", "gclid", "utm_source", "utm_medium", "utm_campaign"];
  const extra = attrs
    .filter((k) => params.has(k))
    .map((k) => `&${k}=${params.get(k)}`)
    .join("");
  return base + extra;
}

export function BookingWidget() {
  const [iframeSrc, setIframeSrc] = useState(
    "https://app.clinicweed.com.br/agendar/draingridazevedo?bare=1"
  );

  useEffect(() => {
    setIframeSrc(buildSrc());

    const onMessage = (e: MessageEvent) => {
      if (!e.data || typeof e.data.height !== "number") return;
      if (e.data.type !== "resize") return;
      const iframe = document.getElementById(
        "clinicweed-booking-links"
      ) as HTMLIFrameElement | null;
      if (iframe) iframe.style.height = e.data.height + "px";
    };

    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  return (
    <div className="w-full bg-white rounded-3xl overflow-hidden shadow-lg">
      <iframe
        id="clinicweed-booking-links"
        src={iframeSrc}
        style={{
          border: "none",
          display: "block",
          width: "100%",
          height: 700,
        }}
      />
    </div>
  );
}
