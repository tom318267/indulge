import React from "react";
import Head from "next/head";
import Navbar from "./Navbar";

const Layout = ({ title, keywords, description, children }) => {
  return (
    <div className="relative">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <div>{children}</div>
    </div>
  );
};

Layout.defaultProps = {
  title: "Indulge",
  description: "The best ice cream around!",
  keywords: "ice cream, dessert, treats",
};

export default Layout;
