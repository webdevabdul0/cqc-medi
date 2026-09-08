"use client";

import dynamic from "next/dynamic";

const StartPopup = dynamic(
  () => import("./StartPopup").then((m) => ({ default: m.StartPopup })),
  { ssr: false },
);

export function PopupWrapper() {
  return <StartPopup />;
}
