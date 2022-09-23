import React, { FC } from "react";
import Head from "next/head";

const Presenter: FC<any> = ({ title, description }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta property="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${process.env.SITE_URL}/ogp.png`} />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default Presenter;
