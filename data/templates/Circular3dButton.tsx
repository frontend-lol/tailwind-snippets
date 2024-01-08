// this is what i  found from santatracker.google.com

import React from "react";
import { FaHome } from "react-icons/fa";

export default function Circular3dButton() {
  return (
    <button className="relative flex h-11 w-11 -translate-x-[3px] -translate-y-5 cursor-pointer items-center justify-center rounded-full bg-[#ff3333] p-0 text-center text-white shadow-[3px_5px_0_rgba(0,0,0,0.3),3px_5px_0_var(--color-bar,#ff3333),8px_7px_0_2px_rgba(0,0,0,0.24)] transition-shadow will-change-[box-shadow,_transform] active:shadow-none">
      <FaHome className="h-8 w-8" />
    </button>
  );
}
