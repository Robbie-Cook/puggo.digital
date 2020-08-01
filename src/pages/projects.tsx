/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Navigation from "../components/Navigation";
import BackgroundImage from "../images/project-background-image.jpg";
import { Parallax } from "react-scroll-parallax";

import { Layout, Menu, Breadcrumb, Row, Col, Card, Space } from "antd";

import Typography from "../components/typography/Typography";
import Button from "../components/Button";
import Section from "../components/Section";
import Projects from "../components/Projects";

const { Title, Text } = Typography;

const { Header, Content, Footer } = Layout;

const navHeight = 66;
const footerHeight = 66;

/**
 * Interface for IndexPage props
 */
interface IndexPageProps {
  children?: any;
}

/**
 *  A IndexPage component.
 */
const IndexPage: React.FC<IndexPageProps> = (props) => {
  return (
    <Layout>
      <Header
        css={css`
          background-color: white;
        `}
      >
        <Navigation height={navHeight} />
      </Header>

      <Content
        css={css`
          min-height: calc(100vh - ${navHeight}px - ${footerHeight}px);
          background-color: white;
        `}
      >
        <div
          css={css`
            background-color: #f0f2f5;
            min-height: 60vh;
          `}
        >
          <Space direction="vertical" size="large">
            <Row
              css={css`
            /* padding-bottom: 20%; */
            padding-top: 10%;
            padding-bottom: 10%;
            background-image: url('${BackgroundImage}');
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
          `}
            >
              <Col span={24}>
                <Parallax
                  className="custom-class"
                  y={[-20, 20]}
                  tagOuter="figure"
                >
                  <Title
                    level={1}
                    css={css`
                      text-shadow: 5px 2px 0px #ce5937;
                    `}
                  >
                    Projects
                  </Title>
                </Parallax>
              </Col>
            </Row>

            <Section>
              <Space direction="vertical" size="large">
                <Projects />
              </Space>
            </Section>
          </Space>
        </div>
      </Content>

      <Footer
        css={css`
          text-align: center;
        `}
      >
        puggo.digital ©2020
      </Footer>
    </Layout>
  );
};

export default IndexPage;
