/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { Button as AntButton } from "antd";
import React from "react";

/**
 * Interface for Button props
 */
interface ButtonProps {
  children?: any;
  type: any;
}

/**
 *  A Button component.
 */
const Button: React.FC<ButtonProps> = (props) => {
  return (
    <AntButton
      type={props.type}
      css={css`
        font-size: 1.07rem;
      `}
    >
      {props.children}
    </AntButton>
  );
};

export default Button;
