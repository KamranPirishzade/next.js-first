import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-rows-4 p-2 min-h-screen grid-cols-4 gap-6 text-center text-xl tracking-wider">
      <header className="col-span-3 col-start-2 row-span-1 bg-sky-500 rounded-2xl">
        Hello
      </header>
      <ul className="col-span-1 row-start-1 row-span-4 rounded-2xl  flex flex-col justify-between bg-slate-600 text-black">
        <li>Link1</li>
        <li>Link2</li>
        <li>Link3</li>
        <li>Link4</li>
        <li>Link5</li>
      </ul>
      {children}
    </div>
  );
}
