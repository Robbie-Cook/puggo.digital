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
  offset?: number;
}

/**
 *  A Section component.
 */
const Section: React.FC<SectionProps> = (props) => {
  const offset = props.offset ?? 20;

  return (
    <Parallax className="custom-class" y={[-offset, offset]} tagOuter="figure">
      <div
        css={css`
          padding: 150px 0;
        `}
      >
        {props.title && (
          <Row
            css={css`
              margin: 0 0 70px 0;
            `}
            justify="center"
          >
            <Col span={24}>
              <Title
                level={2}
                css={css`
                  text-align: center;
                `}
              >
                {props.title}.
              </Title>
            </Col>
          </Row>
        )}
        {props.children}
      </div>
    </Parallax>
  );
};

export default Section;
