import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "ExamGlow — Free for Everyone" },
    ],
  }),
  component: PricingRedirect,
});

function PricingRedirect() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate({ to: "/home", replace: true });
  }, [navigate]);
  return null;
}
