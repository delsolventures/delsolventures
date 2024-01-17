import Hero from "../components/hero";
import Navbar from "../components/navbar";

import SectionTitle from "../components/sectionTitle";
import SEO from "../components/seo";
//import Video from "../components/video";
import Footer from "../components/footer";
//import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";

export default function Home() {
  return (
    <>
      <SEO
        title="Home | del SOL"
        description="Early-stage VC in biotech, cleantech, foodtech & mobility."
      />

      <Navbar />
      <main className="home-page h-full mx-auto px-8">
        <Hero />
        <SectionTitle
          pretitle="Our Story"
          title="Building & investing in rising startups."
        >
          We help develop early-stage companies with investment, strategic
          advice and mentoring to achieve market leadership in sustainable
          technologies and innovations.
        </SectionTitle>

        <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
          How can an organization or aspiring venturer partner with del SOL?
        </SectionTitle>
        <Faq />
        <Cta />
      </main>
      <PopupWidget />
    </>
  );
}
