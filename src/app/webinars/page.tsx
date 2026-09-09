import type { Metadata } from "next";
import { WebinarsClient } from "./WebinarsClient";

export const metadata: Metadata = {
  title: "Webinars | CQC MediSolutions",
  description:
    "Free monthly webinar mini-series on the CQC registration process — 30 minutes, Thursday lunchtimes, start to finish.",
};

export default function WebinarsPage() {
  return <WebinarsClient />;
}
