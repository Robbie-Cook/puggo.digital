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
  onClick?: ((event: React.MouseEvent<HTMLElement, MouseEvent>) => void) | undefined;
  href?: string;
}

/**
 *  A Button component.
 */
const Button: React.FC<ButtonProps> = (props) => {
  return (
    <AntButton
      css={css`
        font-size: 1.07rem;
      `}
      {...props}
    >
      {props.children}
    </AntButton>
  );
};

export default Button;
