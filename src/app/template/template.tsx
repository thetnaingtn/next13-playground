"use client";

import Link from "next/link";
import { PropsWithChildren, useState } from "react";

export default function Template({ children }: PropsWithChildren) {
  const [count, setCount] = useState(0);
  console.log("template rerender");
  return (
    <div>
      <Link
        className="bg-white text-black px-4 py-2 rounded-sm mr-2"
        href="/template/list"
      >
        List
      </Link>
      <Link
        className="bg-white text-black px-4 py-2 rounded-sm"
        href="/template/detail"
      >
        Detail
      </Link>
      <button
        className="block mx-2 my-2 border-white border rounded-sm"
        onClick={() => setCount(count + 1)}
      >
        Clicked! {count}
        {` time${count > 1 ? "s" : ""}`}
      </button>
      {children}
    </div>
  );
}
