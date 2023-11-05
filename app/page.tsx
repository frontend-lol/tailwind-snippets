import Image from "next/image";
import { snippets } from "~/data/snippets";

export default function Home() {
  return (
    <div>
      <h1> Snipe the snippets</h1>
      {snippets.map((snippet) => (
        <div key={snippet.id}>
          <a href={`/snippets/${snippet.id}`}>
            <h2>{snippet.title}</h2>
          </a>
        </div>
      ))}
    </div>
  );
}
