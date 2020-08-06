/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import { linkTo } from "@storybook/addon-links";
import Section from "../components/Section";
import Typography from "../components/typography/Typography";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";
import BackgroundImage from "../components/BackgroundImage";
import { ParallaxProvider } from "react-scroll-parallax";

export default {
  title: "Section",
  component: Section,
  decorators: [withKnobs],
};

export const MySection = () => (
  <ParallaxProvider>
    <BackgroundImage
      css={css`
        width: 500px;
        margin-left: 300px;
        height: 800px;
      `}
      src="https://images.unsplash.com/photo-1534942642400-39e0b996f73f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
    />
    <Section offset={20} title={text("Title", "My title")}>
      <Typography.Text
        css={css`
          text-align: center;
        `}
      >
        {text("Content", "My content")}
      </Typography.Text>
    </Section>
  </ParallaxProvider>
);
MySection.story = {
  name: "Section with Background Image",
};
