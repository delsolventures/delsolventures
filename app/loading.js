"use client";
import Image from "next/image";
import Logo from "./components/logo";
const Loader = ({ src, width, quality }) => {
  return `https://storageapi.fleek.co/20626237-8360-4375-83b2-2294cdded30d-bucket/img/${src}?w=${width}&q=${quality || 75}`;
};
export default function Loading() {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-lg">
          <h1 className="text-5xl font-bold text-primary uppercase">
            Generating
          </h1>
          <Logo size={64} />
          <div className="m-4">
            <span className="loading loading-ring loading-lg text-primary"></span>
            <span className="loading loading-ring loading-lg text-primary"></span>
            <span className="loading loading-ring loading-lg text-primary"></span>
            <span className="loading loading-ring loading-lg text-primary"></span>
            <span className="loading loading-ring loading-lg text-primary"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

{
  /*classsName="relative flex flex-col justify-center overflow-hidden m-8">*/
}
