import React from "react";
import Layout from "../components/Layout";
import { createClient } from "../prismicio";
import { PrismicRichText, SliceZone } from "@prismicio/react";
import { components } from "../components";
import { InferGetStaticPropsType } from "next";

type PageProps = InferGetStaticPropsType<typeof getStaticProps>;
const IndexPage: React.FC<PageProps> = ({ page }) => {
  return (
    <Layout title="GWS | Home">
      <PrismicRichText field={page.data.title} />
      <SliceZone slices={page.data.slices} components={components} />
    </Layout>
  );
};

export default IndexPage;

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });

  const page = await client.getSingle("homepage");

  return {
    props: {
      page,
    },
  };
}
