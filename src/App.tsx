/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import "./App.css";
import Navigation from "./components/Navigation";
import Projects from "./data/projects";
import slugify from "slugify";

import {
  Layout,
  Menu,
  Breadcrumb,
  Typography,
  Row,
  Col,
  Button,
  Card,
  Space,
} from "antd";

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
                `}
              >
                <Col span={24}>
                  <Title level={1}>puggo digital.</Title>
                  <Title level={4}>websites.</Title>
                  <Button type="link">See projects</Button>
                </Col>
              </Row>

              <Row>
                <Col span={24}>
                  <Space direction="vertical">
                    <Title level={2}>Projects</Title>
                  </Space>
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
              <Row>
                <Col span={24}>
                  <Button type="link">See more...</Button>
                </Col>
              </Row>

              {/* About */}
              <Row>
                <Col span={24}>
                  <Title level={2}>About</Title>
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  <Text>
                    puggo.digital makes high-quality, modern websites and web
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
