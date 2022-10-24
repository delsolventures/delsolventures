import Head from "next/head";
import Script from "next/script";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitOne, benefitTwo } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";

export default function Home() {
  <Script type="text/javascript" src="https://s3.tradingview.com/tv.js" />;

  return (
    <>
      <Head>
        <title>del SOL VENTURES INC.</title>
        <meta name="description" content="del Sol Ventures Inc." />
        <link rel="icon" href="/img/logo-ds.png" />
        <script
          type="text/javascript"
          src="https://s3.tradingview.com/tv.js"
        ></script>
        ;
      </Head>

      <Navbar />
      <Hero />
      <iframe>
        <Script
          id="tradingview"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
  var tradingview_embed_options = {};
            tradingview_embed_options.width = "640";
            tradingview_embed_options.height = "400";
            tradingview_embed_options.chart = "pZTp4d9M";
            new TradingView.chart(tradingview_embed_options);
`
          }}
        />{" "}
        ;
      </iframe>
      <p>
        <a href="https://www.tradingview.com/chart/AAPL/pZTp4d9M-Trading-View-AAPL-Demo/">
          Trading View - AAPL Demo
        </a>{" "}
        by <a href="https://www.tradingview.com/u/mobeers/">mobeers</a> on{" "}
        <a href="https://www.tradingview.com/">TradingView.com</a>
      </p>
    </>
  );
}
