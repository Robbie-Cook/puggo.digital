import React from "react";
import { linkTo } from "@storybook/addon-links";
import Typography from "../components/typography/Typography";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";

export default {
  title: "Typography",
  component: Typography,
  decorators: [withKnobs],
};

export const H1Story = () => (
  <Typography.Title level={1}>{text("Title", "My title")}</Typography.Title>
);
H1Story.story = {
  name: "Level 1",
};

export const H2Story = () => (
  <Typography.Title level={2}>{text("Title", "My title")}</Typography.Title>
);
H2Story.story = {
  name: "Level 2",
};

export const Text = () => (
  <Typography.Text>{text("Text", "My text")}</Typography.Text>
);
Text.story = {
  name: "Text",
};
