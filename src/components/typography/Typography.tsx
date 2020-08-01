/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { Typography as AntTypography } from "antd";
import React from "react";

const { Title: AntTitle, Text: AntText, Paragraph: AntParagraph } = AntTypography;

/**
 * A Title component.
 */
const Title: React.FC<typeof AntTypography["Title"]["TitleProps"]> = (props) => {

  return <div css={css``}>Typography component</div>;
};



/**
 * Interface for Typography props
 */
interface TypographyProps {
  children?: any;
}

/**
 * A Typography component.
 */
const Typography: React.FC<TypographyProps> = (props) => {
  return <div css={css``}>Typography component</div>;
};

export default Typography;
