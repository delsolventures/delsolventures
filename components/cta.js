import React from "react";
import Link from "next/link";
import Container from "./container";

export default function Cta() {
  return (
    <Container>
      <div className="flex flex-wrap items-center justify-between w-full max-w-4xl gap-5 mx-auto bg-trueSky-600 px-7 py-7 lg:px-12 lg:py-12 lg:flex-nowrap rounded-xl">
        <div className="flex-grow text-center lg:text-left">
          <h2 className="text-2xl font-medium lg:text-3xl text-trueGray-700 dark:text-trueGray-100">
            Ready to discover new ventures with us?
          </h2>
          <p className="mt-2 font-medium text-trueGray-700 dark:text-trueGray-100 text-opacity-90 lg:text-xl"></p>
        </div>
        <div className="flex-shrink-0 w-full text-center lg:w-auto">
          <Link
            href="/portfolio"
            className="inline-block py-3 mx-auto text-lg font-medium text-center text-trueSky-600 bg-trueGray-100 rounded-md px-7 lg:px-10 lg:py-5 "
          >
            View Our Portfolio
          </Link>
        </div>
      </div>
    </Container>
  );
}
