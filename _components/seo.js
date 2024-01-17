import Head from "next/head";

export default function SEO({
  title = "del SOL",
  description = "Early-stage VC in biotech, cleantech, foodtech & mobility."
}) {
  return (
    <>
      <Head>
        <title key="title">{title}</title>
        <meta key="description" name="description" content={description} />
      </Head>
    </>
  );
}
