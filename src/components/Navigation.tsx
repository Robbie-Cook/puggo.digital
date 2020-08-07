/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React from "react";

import { Layout, Menu, Breadcrumb, Typography } from "antd";
import { useHistory, useLocation } from "react-router-dom";
import { Colors, Pages } from "../types";

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
  const history = useHistory();
  const location = useLocation();

  /**
   * Get the current page
   */
  let selectedPage = "";
  if (location.pathname === Pages.Home) {
    selectedPage = Pages.Home;
  } else if (location.pathname === Pages.Projects) {
    selectedPage = Pages.Projects;
  }

  console.log(location);

  return (
    <div
      css={css`
        display: flex;
        height: ${props.height};
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
            margin-right: 50px;
            text-shadow: 2px 1px 0px ${Colors.Red};
            font-family: "Coustard", serif;
            margin-top: -5px;
          `}
        >
          puggo
        </Title>
      </div>
      <Menu mode="horizontal" selectedKeys={[selectedPage]}>
        <Menu.Item
          key={Pages.Home}
          css={css`
            color: black;
          `}
          onClick={() => history.push("/")}
        >
          Home
        </Menu.Item>
        <Menu.Item
          key={Pages.Projects}
          css={css`
            color: black;
          `}
          onClick={() => history.push("/projects")}
        >
          Projects
        </Menu.Item>
      </Menu>
      ,
    </div>
  );
};

export default Navigation;
