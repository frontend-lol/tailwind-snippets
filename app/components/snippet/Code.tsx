import React from "react";
import { promises as fs } from "fs";

async function Code({ path }: { path: string }) {
  const code = await fs.readFile(path, "utf-8");

  return (
    <div className="rounded-lg bg-teal-950 p-5">
      <pre className=" overflow-hidden whitespace-pre-wrap [text-wrap:pretty]">
        <code className=" ">{code}</code>
      </pre>
    </div>
  );
}

export default Code;
