/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Navigation from "../components/Navigation";
import Projects from "../components/Projects";
import slugify from "slugify";
import { Parallax } from "react-scroll-parallax";

import MyBackgroundImage from "../images/background-image.jpg";
import Puggo2 from "../images/puggo-with-hat.jpg";
import Robbie from "../images/people/robbie.jpg";

import BackgroundImage from "../components/BackgroundImage";

import { Layout, Menu, Breadcrumb, Row, Col, Card, Space, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

import Typography from "../components/typography/Typography";
import Button from "../components/Button";
import Section from "../components/Section";
import { Link } from "react-router-dom";
import Types from "../types";
import Person from "../components/Person";

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
    <Layout css={css``}>
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
        `}
      >
        <div
          css={css`
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
          <BackgroundImage
            src={Puggo2}
            css={css`
              top: 150vh;
              background-position: 30% center;
              background-size: 500px;
              opacity: 0.68;
            `}
            height={700}
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

            <Section title="Projects">
              <Space direction="vertical" size="large">
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
                  <Text css={css``}>
                    puggo.digital makes noice web stuff. If you got problems,
                    hit up{" "}
                    <a href="mailto:contact@puggo.digital">
                      contact@puggo.digital
                    </a>
                    , and we'll sort you out.
                  </Text>
                </Col>
              </Row>
            </Section>
            <Section title="Team">
              <Row>
                <Col
                  span={24}
                  css={css`
                    padding: 0 20%;
                  `}
                >
                  {[
                    {
                      name: "Robbie",
                      title: "Developer",
                      image: Robbie,
                      links: [
                        {
                          name: "Github",
                          link: "",
                        },
                      ],
                      description: "Loves cats, and React",
                    },
                  ].map((item) => {
                    return (
                     <Person key={item.name} {...item} />
                    );
                  })}
                </Col>
              </Row>
            </Section>
          </Space>
        </div>
      </Content>

      <Footer
        css={css`
          text-align: center;
          position: relative;
          top: 400px;
        `}
      >
        puggo.digital ©2020
      </Footer>
    </Layout>
  );
};

export default IndexPage;
