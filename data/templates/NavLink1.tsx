import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

export default function NavLink1() {
  return (
    <Link
      href={"#"}
      className="inline-flex items-center gap-2 text-sm font-semibold text-orange-700 transition-all hover:gap-3 hover:text-orange-600 dark:text-orange-300 dark:hover:text-orange-400"
    >
      Link Here <FaArrowRight />
    </Link>
  );
}
