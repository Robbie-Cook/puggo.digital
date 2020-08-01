/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import "./App.css";
import Navigation from "./components/Navigation";
import Projects from "./data/projects";
import slugify from "slugify";
import BackgroundImage from "./images/background-image.jpg";
import { Parallax } from "react-scroll-parallax";

import { Layout, Menu, Breadcrumb, Row, Col, Card, Space } from "antd";

import Typography from "./components/typography/Typography";
import Button from "./components/Button";

const { Title, Text } = Typography;

const { Header, Content, Footer } = Layout;

const navHeight = 66;
const footerHeight = 66;

function App() {
  return (
    <div className="App">
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
                      puggo digital
                    </Title>
                    <Title level={4}>websites. puggos.</Title>
                    <Button type="link">See projects</Button>
                  </Parallax>
                </Col>
              </Row>
              <Parallax
                className="custom-class"
                y={[-20, 20]}
                tagOuter="figure"
              >
                <Space direction="vertical" size="large">
                  <Row>
                    <Col span={24}>
                      <Parallax
                        className="custom-class"
                        y={[-20, 20]}
                        tagOuter="figure"
                      >
                        <Space direction="vertical">
                          <Title level={2}>Projects</Title>
                        </Space>
                      </Parallax>
                    </Col>
                  </Row>
                  <Row>
                    {Projects.filter((item) => item.preview).map((project) => {
                      const imageName = `${
                        process.env.PUBLIC_URL
                      }/images/projects/${slugify(
                        project.name.replace(/\.com/, "").replace(/\./g, "-")
                      )}.png`;

                      return (
                        <Col
                          key={project.name}
                          span={8}
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
                </Space>

                <Row>
                  <Col span={24}>
                    <Button type="link">See more...</Button>
                  </Col>
                </Row>
              </Parallax>

              {/* About */}
              <Row
                css={css`
                  margin-top: 20px;
                `}
              >
                <Col span={24}>
                  <Title level={2}>About</Title>
                </Col>
              </Row>
              <Row>
                <Col
                  span={24}
                  css={css`
                    padding: 0 20%;
                  `}
                >
                  <Text>
                    puggo.digital makes noice websites and web
                    technologies. If you got problems, hit up the support team
                    at{" "}
                    <a href="mailto:contact@puggo.digital">
                      contact@puggo.digital
                    </a>
                    , and we'll sort you out.
                  </Text>
                </Col>
              </Row>
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
    </div>
  );
}

export default App;
