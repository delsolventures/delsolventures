import React from "react";
import Link from "next/link";

export default function Cta() {
  return (
    <div className="flex flex-wrap items-center justify-between w-full max-w-4xl gap-5 mx-auto px-7 py-7 lg:px-12 lg:py-12 lg:flex-nowrap rounded-xl">
      <div className="flex-grow text-center lg:text-left">
        <h2 className="text-2xl font-bold lg:text-3xl">
          Ready to discover new ventures with us?
        </h2>
        <p className="mt-2 font-medium text-opacity-90 lg:text-xl"></p>
      </div>
      <div className="flex-shrink-0 w-full text-center lg:w-auto">
        <Link
          href="/portfolio"
          className="btn btn-primary btn-wide p-2 mx-auto text-lg text-center rounded-md text-primary-content"
        >
          View Portfolio
        </Link>
      </div>
    </div>
  );
}
