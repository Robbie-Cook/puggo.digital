/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import MyBackgroundImage from "../images/background-image.jpg";

/**
  Interface for BackgroundImage props
*/
interface BackgroundImageProps {
  children?: any;
}

/**
  A BackgroundImage component.
*/
const BackgroundImage: React.FC<BackgroundImageProps> = (props) => {
  return (
    <div
      css={css`
        position: absolute;
        width: 100%;
        height: 80vh;
        background-image: url('${MyBackgroundImage}');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center 39%;
      `}
    />
  );
};

export default BackgroundImage;
