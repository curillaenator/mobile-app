import Popup from "reactjs-popup";
import ReactPlayer from "react-player/youtube";
import styled from "styled-components";

import { colors } from "../../../utils/colors";
import { icons } from "../../../utils/icons";

import dots from "../../../assets/icons/dots.svg";
import frame from "../../../assets/images/video.png";

const PopupStyled = styled(Popup)`
  &-overlay {
    padding: 0;
    margin: 0;
    backdrop-filter: blur(4px);
    transition: 0.08s linear;
  }

  &-content {
    padding: 16px;
    margin: 0;
    max-width: 375px;
    min-width: 375px;
    border-radius: 8px;
    border: 2px solid ${colors.primaryPeach};
    background-color: ${colors.backWhite};
  }
`;

const VideoModal = styled.div`
  .head {
    display: flex;
    flex-direction: row-reverse;
    margin-bottom: 16px;

    &_button {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 40px;
      height: 40px;
      cursor: pointer;

      & > svg {
        width: 24px;
        height: 24px;

        & > path {
          fill: ${colors.fontDark};
        }
      }
    }
  }
`;

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
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      cursor: pointer;

      &-cover {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: 0.08s linear;
      }

      &-play {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 70px;
        height: 70px;
        border-radius: 50%;
        background-color: ${colors.backWhite};
        transition: 0.08s linear;

        & > svg {
          transform: translateX(2px);
          fill: ${colors.primaryPeach};

          & > path {
            stroke: ${colors.primaryPeach};
          }
        }
      }

      &:hover {
        .frame_video-play {
          background-color: ${colors.primaryPeach};

          & > svg {
            transform: translateX(2px);
            fill: ${colors.fontWhite};

            & > path {
              stroke: ${colors.fontWhite};
            }
          }
        }
      }
    }
  }
`;

export const Video = ({ videoURL }) => {
  return (
    <VideoStyled>
      <div className="frame">
        <img className="frame_dots" src={dots} alt="dots" />

        <div className="frame_ellipse"></div>

        <PopupStyled
          arrow={false}
          modal
          // lockScroll
          trigger={() => (
            <div className="frame_video">
              <img className="frame_video-cover" src={frame} alt="" />
              <div className="frame_video-play">{icons.play}</div>
            </div>
          )}
        >
          {(close) => (
            <VideoModal>
              <div className="head">
                <button className="head_button" onClick={close}>
                  {icons.close}
                </button>
              </div>

              <ReactPlayer url={videoURL} controls={true} width="100%" />
            </VideoModal>
          )}
        </PopupStyled>
      </div>
    </VideoStyled>
  );
};
