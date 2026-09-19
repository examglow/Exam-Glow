import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/checkout")({
  head: () => ({
    meta: [
      { title: "ExamGlow — Free for Everyone" },
    ],
  }),
  component: CheckoutRedirect,
});

function CheckoutRedirect() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate({ to: "/home", replace: true });
  }, [navigate]);
  return null;
}
