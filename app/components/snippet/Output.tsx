import React from "react";

function Output({ children }: { children: React.ReactNode }) {
  return <div className="rounded-lg bg-neutral-900 p-5">{children}</div>;
}

export default Output;
