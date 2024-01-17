"use client";
import Image from "next/image";
import Link from "next/link";

const ImageHero = ({ src, width, quality }) => {
  return `https://storageapi.fleek.co/20626237-8360-4375-83b2-2294cdded30d-bucket/img/${src}?w=${width}&q=${
    quality || 75
  }`;
};

export default function Hero() {
  return (
    <div className="hero min-h-screen text-center">
      <div className="hero-content flex-col lg:flex-row p-8">
        <Image
          loader={ImageHero}
          src="/doodleipsum-f93384e7375de3fe0c8ab3a29cd337ea.png"
          width={600}
          height={600}
          alt="Hero Illustration"
          priority={true}
        />
        <div>
          <h1 className="text-5xl font-bold">
            Enabling the future technologists of Central America.
          </h1>
          <h2 className="py-6 text-2xl">
            del SOL is an early-stage VC firm Building smart homes,
            bio-diversity grow farms & water generation in Mexico, Colombia,
            Belize, Costa Rica, El Salvador, Guatemala, Honduras, Nicaragua, and
            Panama.
          </h2>
        </div>
      </div>
    </div>
  );
}
