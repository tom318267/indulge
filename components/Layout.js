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
        <link
          href="https://fonts.googleapis.com/css2?family=Cherry+Swash:wght@400;700&family=Sansita+Swashed:wght@300;400;500;600;700&family=Varela+Round&display=swap"
          rel="stylesheet"
        />
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
