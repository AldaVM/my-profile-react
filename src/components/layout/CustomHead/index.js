import Head from "next/head";

export default function CustomHead({ title, ogImage }) {
  return (
    <Head>
      <link rel="icon" type="image/png" href="" />
      <meta name="author" content="Aldair Valencia <aldairvm95@gmail>" />
      <meta name="keywords" content="Registro Imperium Cross" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>AVM | {title} </title>
      <meta property="og:title" content={title} />
      <meta property="og:image" content={ogImage.url} />
    </Head>
  );
}
