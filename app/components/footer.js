"use client";
import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="footer footer-center p-4 flex-nowrap grow">
      <div className="grid grid-flow-col gap-4">
        Copyright © {new Date().getFullYear()}
        <Link href="/terms" className="text-sm font-semibold px-4 uppercase">
          Terms
        </Link>
        <Link href="/privacy" className="text-sm font-semibold px-4 uppercase">
          Privacy
        </Link>
      </div>
    </div>
  );
}
