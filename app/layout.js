import { Analytics } from "@vercel/analytics/react";
import { Providers } from "./providers";
import "../styles/index.css";
import "../styles/globals.css";
import { Flamenco } from "next/font/google";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Cal from "./components/cal";

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: 1,
  // Also supported by less commonly used
  // interactiveWidget: 'resizes-visual',
};

const flamenco = Flamenco({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});
export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}) {
  return (
    <html lang="en" className={flamenco.className}>
      <body className="text-primary-content">
        <Providers>
          <Navbar />
          {children}
          <Footer />
          <Cal />
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
