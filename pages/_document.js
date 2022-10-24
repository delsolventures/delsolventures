import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import { CssBaseline } from "@nextui-org/react";

import Footer from "../components/footermini";

//import Head from "next/head";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: React.Children.toArray([initialProps.styles])
    };
  }

  render() {
    return (
      <Html>
        <Head>
          {CssBaseline.flush()}

          <meta name="title" content="del SOL" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://delsolventures.nft/" />
          <meta property="og:title" content="del SOL VENTURES" />
          <meta
            property="og:description"
            content="Early-stage VC in biotech, cleantech, foodtech & mobility."
          />
          <meta
            property="og:image"
            content="https://storageapi.fleek.co/20626237-8360-4375-83b2-2294cdded30d-bucket/img/delsolendlesssummer.svg"
          />

          <meta property="twitter:card" content="summary_large_image" />
          <meta
            property="twitter:url"
            content="https://twitter.com/delsolventures"
          />
          <meta property="twitter:title" content="del SOL" />
          <meta
            property="twitter:description"
            content="Early-stage VC in biotech, cleantech, foodtech & mobility."
          />
          <meta
            property="twitter:image"
            content="https://storageapi.fleek.co/20626237-8360-4375-83b2-2294cdded30d-bucket/img/delsolendlesssummer.svg"
          />

          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400..700&display=swap"
            rel="stylesheet"
          />
          <script
            src="https://kit.fontawesome.com/5834df7891.js"
            crossorigin="anonymous"
          ></script>
          <link
            rel="icon"
            href="https://storageapi.fleek.co/20626237-8360-4375-83b2-2294cdded30d-bucket/img/logo-ds.png"
          />
        </Head>
        <body className="lightmode dark:darkmode  ">
          <Main />
          <NextScript />
          <Footer />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
