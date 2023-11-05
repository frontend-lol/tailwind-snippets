import Link from "next/link";
import React from "react";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-full flex-col">
      {/* header */}
      <div className="flex items-center justify-between">
        <Link href={"/"} className="font-bold">
          Tailwind Snippets
        </Link>
      </div>
      {/* body */}
      <div className="mb-auto flex-grow">{children}</div>
      {/* footer */}
      <div className="flex items-center justify-between">
        <div className="text-sm">
          <a href="https://frontend.lol" target="_blank" rel="noreferrer">
            Frontend.lol
          </a>
        </div>
        <div className="text-sm">
          {/* copyright */}
          <div>© 2021 Frontend.lol</div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
