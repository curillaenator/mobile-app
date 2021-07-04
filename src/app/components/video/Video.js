import styled from "styled-components";

import { colors } from "../../../utils/colors";

import dots from "../../../assets/icons/dots.svg";
import frame from "../../../assets/images/video.png";

const VideoStyled = styled.section`
  width: 100%;
  padding: 0 16px;
  margin-bottom: 61px;
  z-index: 10;

  .frame {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3px;
    border: 3px solid ${colors.primaryPeach};
    border-radius: 8px;

    &_dots {
      position: absolute;
      top: -14.2px;
      right: -12px;
      z-index: -2;
    }

    &_ellipse {
      position: absolute;
      bottom: -41px;
      left: -7px;
      width: 125px;
      height: 125px;
      border-radius: 50%;
      border: 23px solid ${colors.primaryPeach};
      filter: drop-shadow(0 4px 15px ${colors.primaryPeach50});
      z-index: -2;
    }

    &_video {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

export const Video = () => {
  return (
    <VideoStyled>
      <div className="frame">
        <img className="frame_dots" src={dots} alt="dots" />

        <div className="frame_ellipse"></div>

        <img className="frame_video" src={frame} alt="" />
      </div>
    </VideoStyled>
  );
};
