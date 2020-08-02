/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React from "react";
import { Avatar } from "antd";
import Typography from "../components/typography/Typography";

const { Title, Text } = Typography;

/**
  Interface for Person props
*/
interface PersonProps {
  children?: any;
  name?: string;
  image?: string | JSX.Element;
  title?: string;
  description?: string;
}

/**
  A Person component.
*/
const Person: React.FC<PersonProps> = (props) => {
  return (
    <div
      key={props.name}
      css={css`
        display: flex;
        flex-direction: column;
        align-items: center;
      `}
    >
      <Avatar
        size={270}
        icon={
          typeof props.image === "string" ? (
            <img src={props.image} />
          ) : (
            props.image
          )
        }
      />
      <div
        css={css`
          display: flex;
          flex-direction: column;
        `}
      >
        <Title
          level={4}
          css={css`
            margin-top: 20px;
            margin-bottom: 0px !important;
            font-weight: bold;
          `}
        >
          {props.name}
        </Title>
        <Text
          css={css`
            color: #ce5937;
            font-weight: 500;
            font-size: 0.96rem;
            font-weight: bold;
            font-family: "Coustard", sans-serif;
          `}
        >
          {props.title}
        </Text>
        <Text
          css={css`
            width: max-content;
          `}
        >
          {props.description}
        </Text>
      </div>
    </div>
  );
};

export default Person;
