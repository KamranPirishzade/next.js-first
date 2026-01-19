import React from "react";

export default function Page() {
  return (
    <section className="flex col-span-3 row-span-3 row-start-2 col-start-2 w-full h-full rounded-2xl text-white items-center bg-sky-950 justify-center max-w-7xl m-auto">
      <form action="POST" className="flex flex-col  gap-2">
        <div>
          <label htmlFor="username" className="block">
            Username
          </label>
          <input type="text" name="username" id="username" />
        </div>
        <div>
          <label htmlFor="password" className="block">
            Password
          </label>
          <input type="text" name="password" id="password" />
        </div>
      </form>
    </section>
  );
}
