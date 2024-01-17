"use client"; // Error components must be Client Components

import Link from "next/link";
import Logo from "./components/logo";
export default function NotFound() {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-lg">
          <h1 className="text-5xl font-bold">When AI Goes Wrong</h1>
          <Logo size={64} className="m-4" />
          <div>
            <span className="loading loading-ring loading-lg text-info"></span>
            <span className="loading loading-ring loading-lg text-info"></span>
            <span className="loading loading-ring loading-lg text-info"></span>
            <span className="loading loading-ring loading-lg text-info"></span>
            <span className="loading loading-ring loading-lg text-info"></span>
          </div>
          <button className="btn-accent btn uppercase">
            <Link href="/">HOME</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
