import React from "react";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

import type { Content } from "@prismicio/client";
import { Box, Typography } from "@mui/material";

export type ExampleSliceProps = SliceComponentProps<Content.ExampleSliceSlice>;
const ExampleSlice: React.FC<ExampleSliceProps> = ({ slice }) => {
  return (
    <Box sx={{ borderTop: "1px solid grey", borderBottom: "1px solid grey" }}>
      <Typography>Example slice</Typography>
      <PrismicRichText field={slice.primary.title} />
      <PrismicRichText field={slice.primary.description} />
    </Box>
  );
};

export default ExampleSlice;
