import React from "react";
import Head from "next/head";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Your Page Title</title>
        {/* Add any other meta tags or external stylesheets here */}
      </Head>
      <header>{/* Add your header content here */}</header>
      <main>{children}</main>
      <footer>{/* Add your footer content here */}</footer>
    </>
  );
};

export default Layout;
