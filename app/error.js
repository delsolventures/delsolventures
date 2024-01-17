"use client"; // Error components must be Client Components
import Logo from "./components/logo";
import Link from "next/link";
export default function Error() {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-lg">
          <h1 className="mb-5 text-5xl font-bold text-accent uppercase">
            AI Computation Error
          </h1>
          <Logo size={64} />
          <button className="my-4 btn-accent btn uppercase">
            <Link href="/">Home</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
