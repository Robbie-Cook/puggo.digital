/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Navigation from "../components/Navigation";
import Projects from "../components/Projects";
import slugify from "slugify";
import { Parallax } from "react-scroll-parallax";
import MyBackgroundImage from "../images/background-image.jpg";

import BackgroundImage from "../components/BackgroundImage";

import { Layout, Menu, Breadcrumb, Row, Col, Card, Space } from "antd";

import Typography from "../components/typography/Typography";
import Button from "../components/Button";
import Section from "../components/Section";
import { Link } from "react-router-dom";
import Types from "../types";

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
            position: relative;
          `}
        >
          <BackgroundImage
            src={MyBackgroundImage}
            css={css`
              background-position: center 35%;
            `}
          />
          <Space direction="vertical" size="large">
            <Row
              css={css`
                padding-top: 100px;
                padding-bottom: 100px;
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
                    puggo digital
                  </Title>
                  <Title level={4}>websites. puggos.</Title>
                </Parallax>
              </Col>
            </Row>

            <Section>
              <Space direction="vertical" size="large">
                <Row>
                  <Col span={24}>
                    <Space direction="vertical">
                      <Title level={2}>Projects</Title>
                    </Space>
                  </Col>
                </Row>
                <Projects onlyShowPreview={true} />
              </Space>

              <Row>
                <Col span={24}>
                  <Link to={Types.Pages.Projects}>
                    <Button type="link" href="/projects">
                      See more...
                    </Button>
                  </Link>
                </Col>
              </Row>
            </Section>

            {/* About */}
            <Section title="About">
              <Row>
                <Col
                  span={24}
                  css={css`
                    padding: 0 20%;
                  `}
                >
                  <Text>
                    puggo.digital makes noice websites and web technologies. If
                    you got problems, hit up the support team at{" "}
                    <a href="mailto:contact@puggo.digital">
                      contact@puggo.digital
                    </a>
                    , and we'll sort you out.
                  </Text>
                </Col>
              </Row>
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
