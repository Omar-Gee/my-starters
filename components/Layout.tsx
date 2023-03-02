import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";
import Footer from "./footer";
import Header from "./header";
import PageHead from "./SEO";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "This is the default title" }: Props) => (
  <div>
    <PageHead title={title} />
    <Header />
    {children}
    <Footer />
  </div>
);

export default Layout;
