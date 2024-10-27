import React from "react";

export default function Crafted({ children }: { children: React.ReactNode }) {
  return <span className="text-cyan-700 font-bold">{children}</span>;
}
