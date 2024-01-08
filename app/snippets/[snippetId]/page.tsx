import { notFound } from "next/navigation";
import React from "react";
import Code from "~/app/components/snippet/Code";
import Output from "~/app/components/snippet/Output";
import { snippets } from "~/data/snippets";
export const dynamic = "force-static";
export async function generateStaticParams() {
  return snippets.map((s) => ({ params: { snippetId: s.id } }));
}
export default function Page({ params }: { params: { snippetId: string } }) {
  const snippet = snippets.find((s) => s.id === params.snippetId);
  if (!snippet) {
    return notFound();
  }
  return (
    <div className="grid auto-cols-fr auto-rows-fr grid-cols-2 gap-2 rounded  p-4 ">
      <Output>{snippet.jsx()}</Output>
      <Code path={snippet.codePath} />
    </div>
  );
}
