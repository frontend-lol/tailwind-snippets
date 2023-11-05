import React from "react";
import { promises as fs } from "fs";
import { headers } from "next/headers";
async function Code({ path }: { path: string }) {
  const headersInstance = headers();
  const baseUrl =
    headersInstance.get(":authority") || headersInstance.get("Host");
  const code =
    process.env.NODE_ENV === "production"
      ? await fetch(`http://${baseUrl}${path}`).then((res) => res.text())
      : await fs.readFile(path, "utf-8");

  return (
    <div className="rounded-lg bg-teal-950 p-5">
      <pre className=" overflow-hidden whitespace-pre-wrap [text-wrap:pretty]">
        <code className=" ">{code}</code>
      </pre>
    </div>
  );
}

export default Code;
