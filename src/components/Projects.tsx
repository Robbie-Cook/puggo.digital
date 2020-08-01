/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React from "react";
import { Row, Col, Card } from "antd";
import slugify from "slugify";

import MyProjects from "../data/projects";

/**
  Interface for Projects props
*/
interface ProjectsProps {
  children?: any;
  onlyShowPreview?: boolean;
}

/**
  A Projects component.
*/
const Projects: React.FC<ProjectsProps> = (props) => {
  return (
    <Row gutter={[24, 16]}>
      {MyProjects.filter((item) => {
        if (props.onlyShowPreview) {
          return item.preview;
        }
        return true;
      }).map((project) => {
        const imageName = `${process.env.PUBLIC_URL}/images/projects/${slugify(
          project.name.replace(/\.com/, "").replace(/\./g, "-")
        )}.png`;

        return (
          <Col
            key={project.name}
            span={8}
            xs={{ span: 24 }}
            xl={8}
            css={css`
              display: flex;
              align-items: center;
              flex-direction: column;
            `}
          >
            <a href={project.link} target="_black">
              <Card
                title={<a href={project.link}>{project.name}</a>}
                css={css`
                  width: 300px;
                  margin: 0 20px;
                `}
              >
                <div
                  css={css`
                    background-image: url(${imageName});
                    height: 130px;
                    width: 100%;
                    background-size: cover;
                    background-repeat: no-repeat;
                  `}
                />
              </Card>
            </a>
          </Col>
        );
      })}
    </Row>
  );
};

export default Projects;
