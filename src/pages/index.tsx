/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Navigation from "../components/Navigation";
import Projects from "../components/Projects";
import slugify from "slugify";
import { Parallax } from "react-scroll-parallax";
import styled from "@emotion/styled";

import MyBackgroundImage from "../images/min/background-image.jpg";
import Puggo2 from "../images/min/puggo-with-hat.jpg";
import Robbie from "../images/min/robbie.jpg";

import BackgroundImage from "../components/BackgroundImage";

import { Layout, Menu, Breadcrumb, Row, Col, Card, Space, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

import Typography from "../components/typography/Typography";
import Button from "../components/Button";
import Section from "../components/Section";
import { Link } from "react-router-dom";
import Person from "../components/Person";
import { Colors, Pages } from "../types";

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

const Value = (props: { children?: string; title: string }) => (
  <div
    css={css`
      text-align: left;
      margin: 0 30px;
      margin-bottom: 120px;
      /* margin: 8rem 16rem 16rem; */
    `}
  >
    <Title
      css={css`
        margin-bottom: 4rem !important;
        text-align: left;
        font-size: 3rem !important;
        margin-bottom: 40px !important;
        /* color: #441a0e !important; */
      `}
      level={3}
    >
      {props.title}
    </Title>
    <Text>{props.children}</Text>
  </div>
);

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
              top: 170vh;
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
                      text-shadow: 5px 2px 0px ${Colors.Red};
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
                  <Link to={Pages.Projects}>
                    <Button type="link" href="/projects">
                      See more...
                    </Button>
                  </Link>
                </Col>
              </Row>
            </Section>

            {/* About */}
            <Section title="why? why">
              <Row gutter={16}>
                <Col span={15} css={css``} offset={5}>
                  <Value title="Good things take time and dedication.">
                    Ain't no time to rush things. Representing your values is
                    more important than representing your timeline.
                  </Value>
                  <Value title="Do it once, do it right.">
                    Work that represents you should be a badge of honour, and
                    built with the right technologies. Vim and Wordpress belong
                    in the past, not in your future.
                  </Value>
                  <Value title="Care for people.">
                    People drive great things. The right thing, and the best
                    thing, is to take care of people.
                    Respect is key.
                  </Value>
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
              <Row justify="center">
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
                    description: "Loves cats, and React.",
                  },
                  {
                    name: "You?",
                    title: "",
                    image: <UserOutlined />,
                    links: [],
                    description: "More welcome! Send an email.",
                  },
                ].map((item) => {
                  return (
                    <Col
                      key={item.name}
                      span={8}
                      xs={{ span: 24 }}
                      xl={8}
                      css={css`
                        padding: 0 20%;
                        /* margin-bottom: 40px; */
                      `}
                    >
                      <Person {...item} />
                    </Col>
                  );
                })}
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
