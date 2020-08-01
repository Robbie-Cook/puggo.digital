/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React from "react";
import { Parallax } from "react-scroll-parallax";
import { Layout, Menu, Breadcrumb, Row, Col, Card, Space } from "antd";
import Typography from "./typography/Typography";

const { Title, Text } = Typography;

/**
 * Interface for Section props
 */
interface SectionProps {
  children?: any;
  title?: string;
}

/**
 *  A Section component.
 */
const Section: React.FC<SectionProps> = (props) => {
  return (
    <Parallax className="custom-class" y={[-20, 20]} tagOuter="figure">
      <div
        css={css`
          padding: 150px 0;
        `}
      >
        {props.title && <Row
          css={css`
            margin: 0 0 70px 0;
          `}
        >
          <Col span={24}>
            <Title level={2}>{props.title}</Title>
          </Col>
        </Row>}
        {props.children}
      </div>
    </Parallax>
  );
};

export default Section;
