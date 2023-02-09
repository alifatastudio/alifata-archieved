import Head from "next/head";

function MetaTags({title="", description="", keyword=""}){
  return (
    <Head>
      <meta name="description" content={description} />
      <meta name="keywords" content={keyword} />

      <title>{title}</title>
    </Head>
  );
}

export default MetaTags;