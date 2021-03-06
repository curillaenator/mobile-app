import { FC } from "react";
import styled from "styled-components";
import { Scrollbars } from "rc-scrollbars";
import { Carousel } from "react-responsive-carousel";

import { Photo } from "../photo/Photo";
import { ButtonIcon } from "../buttons/ButtonIcon";
import { ThumbV } from "../scrollbar/ThumbV";

import { colors } from "../../../utils/colors";
import { icons } from "../../../utils/icons";

import type { INews } from "../../../types/types";

const ModalStyled = styled.div`
  position: relative;
  width: 100%;
  background-color: ${colors.backWhite};

  .close {
    position: absolute;
    top: -10px;
    right: -10px;
    z-index: 10;
  }

  .content {
    padding: 12px;

    &_subtitle {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 12px;

      &-type {
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 16px;
        color: ${colors.primaryPeach};
      }

      &-date {
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 14px;
        color: ${colors.fontGray};
      }
    }

    &_title {
      margin-bottom: 12px;
      font-style: normal;
      font-weight: 700;
      font-size: 24px;
      line-height: 28px;
    }

    &_body {
      max-height: 84px;
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 130%;
    }
  }
`;

interface INewsModal {
  news: INews | null;
  close: () => void;
}

export const NewsModal: FC<INewsModal> = ({ news, close }) => {
  if (!news) close();
  if (!news) return null;

  return (
    <ModalStyled>
      <div className="close">
        <ButtonIcon icon={icons.close} background handler={close} />
      </div>

      <Carousel showStatus={false} showThumbs={false} autoPlay={false}>
        {news.photoURL.map((url, i) => (
          <Photo url={url} ratio={1} key={i} />
        ))}
      </Carousel>

      <div className="content">
        <div className="content_subtitle">
          <div className="content_subtitle-type">{news.type}</div>
          <div className="content_subtitle-date">{news.date}</div>
        </div>

        <div className="content_title">{news.title}</div>

        <Scrollbars
          autoHide
          autoHeight
          autoHeightMax={125}
          renderThumbVertical={(props) => <ThumbV {...props} />}
        >
          {news.content}
        </Scrollbars>
      </div>
    </ModalStyled>
  );
};
