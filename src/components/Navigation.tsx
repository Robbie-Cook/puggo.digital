/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React from "react";

import { Layout, Menu, Breadcrumb, Typography } from "antd";

const { Title, Paragraph, Text } = Typography;

/**
 * Interface for Navigation props
 */
interface NavigationProps {
  children?: any;
  height: number;
}

/**
 * A Navigation component.
 */
const Navigation: React.FC<NavigationProps> = (props) => {
  return (
    <div
      css={css`
        display: flex;
        height: ${props.height}
      `}
    >
      <div
        className="logo"
        css={css`
          display: flex;
          justify-content: center;
          align-content: center;
        `}
      >
        <Title
          level={3}
          css={css`
            margin-bottom: 0 !important;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-right: 80px;
          `}
        >
          puggo.digital
        </Title>
      </div>
      <Menu mode="horizontal" defaultSelectedKeys={["2"]}>
        <Menu.Item key="1">Home</Menu.Item>
        <Menu.Item key="2">Projects</Menu.Item>
      </Menu>
      ,
    </div>
  );
};

export default Navigation;
