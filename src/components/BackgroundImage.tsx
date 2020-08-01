/** @jsx jsx */
import { css, jsx, SerializedStyles } from "@emotion/core";

/**
  Interface for BackgroundImage props
*/
interface BackgroundImageProps {
  children?: any;
  src: string;
  height?: number;
  css?: SerializedStyles;
}

/**
  A BackgroundImage component.
*/
const BackgroundImage: React.FC<BackgroundImageProps> = (props) => {
  return (
    <div
      css={[
        css`
        position: absolute;
        width: 100%;
        height: ${props.height ? `${props.height}px` : "80vh"};
        background-image: url('${props.src}');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        opacity: .88;
      `,
        props.css,
      ]}
      {...props}
    />
  );
};

export default BackgroundImage;
