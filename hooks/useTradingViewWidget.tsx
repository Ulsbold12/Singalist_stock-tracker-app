"use client";

import { useEffect, useRef } from "react";

const useTradingViewWidget = (
  scriptUrl: string,
  config: Record<string, unknown>,
) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const root = containerRef.current;
    if (!root) return;

    const widgetEl = root.querySelector<HTMLDivElement>(
      ".tradingview-widget-container__widget",
    );
    if (!widgetEl) return;

    // route солигдох, re-render үед давхардахгүй байх
    widgetEl.innerHTML = "";

    const script = document.createElement("script");
    script.src = scriptUrl;
    script.async = true;

    // TradingView embed-widget-* дээр config-оо script tag дотор JSON-оор өгдөг
    script.innerHTML = JSON.stringify(config);

    widgetEl.appendChild(script);

    return () => {
      widgetEl.innerHTML = "";
    };
  }, [scriptUrl, config]);

  return containerRef;
};

export default useTradingViewWidget;
