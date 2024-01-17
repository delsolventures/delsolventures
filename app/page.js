/* eslint-disable react/jsx-no-target-blank */
import Hero from "./components/hero";
import SectionTitle from "./components/sectionTitle";
import Faq from "./components/faq";
import Cta from "./components/cta";

export const metadata = {
  title: "del SOL Ventures Inc.",
  description: "del SOL",
  keywords: ["Web 3", "WEB3", "Blockchain", "IPFS", "del SOL Ventures Inc."],
};
export const openGraphImage = {
  images: ["/logo-dsvi.svg"],
};
const Home = () => {
  return (
    <main className="mx-auto">
      <Hero />
      <div className="bg-base-200 p-8">
        <SectionTitle
          pretitle="Our Story"
          title="Building & investing in rising startups."
        >
          We help to develop early-stage companies with investment, strategic
          management & project implementation to adopt sustainable technologies
          and innovations.
        </SectionTitle>

        <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
          How can an organization partner with del SOL?
        </SectionTitle>
        <Faq />
        <Cta />
      </div>
    </main>
  );
};
export default Home;
