/** @jsx jsx */
import { css, jsx, SerializedStyles } from "@emotion/core";
import { Typography as AntTypography } from "antd";
import React from "react";

/**
 * A file of highly custom typeography
 */

const {
  Title: AntTitle,
  Text: AntText,
  Paragraph: AntParagraph,
  Link: AntLink,
} = AntTypography;

/**
 * A Title component.
 */
const Title: React.FC<{
  level: 1 | 2 | 3 | 4 | undefined;
  children: any;
  css?: SerializedStyles;
}> = (props) => {
  return (
    <AntTitle
      level={props.level}
      css={[
        props.css,
        css`
          font-family: "Coustard", sans-serif;
          text-transform: lowercase;

          ${props.level === 1
            ? `
            font-size: 5.5rem!important;         
           `
            : ``}
          ${props.level === 2
            ? `
            font-size: 40px!important;        
           `
            : ``}
        `,
      ]}
      {...props}
    >
      {props.children}
    </AntTitle>
  );
};
/**
 * A Paragraph component.
 */
const Paragraph: React.FC<{
  children: any;
}> = (props) => {
  return <AntParagraph>{props.children}</AntParagraph>;
};
/**
 * A Text component.
 */
const Text: React.FC<{
  children: any;
}> = (props) => {
  return (
    <AntText
      css={css`
        font-size: 1rem;
        color: #282828;
      `}
      {...props}
    >
      {props.children}
    </AntText>
  );
};
/*
 * A Link component.
 */
const Link: React.FC<{
  children: any;
}> = (props) => {
  return <AntLink {...props}>{props.children}</AntLink>;
};

export default {
  Title,
  Paragraph,
  Text,
  Link,
};
