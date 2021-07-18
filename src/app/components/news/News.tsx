import { FC } from "react";
import styled from "styled-components";

import { colors } from "../../../utils/colors";
import { icons } from "../../../utils/icons";

import type { INews } from "../../../types/types";

const contentText = () => `
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
`;

const NewsStyled = styled.section`
  margin-bottom: 20px;
  background-color: ${colors.backLightGray};
  cursor: pointer;
  transition: 0.08s linear;

  &:last-child {
    margin-bottom: 0;
  }

  &:active {
    opacity: 0.5;
  }

  .photo {
    position: relative;
    width: 100%;
    height: 0;
    margin-bottom: 20px;
    padding-top: 100%;

    &_img {
      position: absolute;
      top: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    & > svg {
      position: absolute;
      bottom: 0;
      left: 10px;
    }
  }

  .content {
    ${contentText};
    padding: 0 8px 20px;

    &_type {
      margin-bottom: 4px;
      color: ${colors.primaryPeach};
    }

    &_title {
      margin-bottom: 8px;
      font-style: normal;
      font-weight: 700;
      font-size: 20px;
      line-height: 23px;
    }

    &_content {
      margin-bottom: 20px;
    }

    &_date {
      color: ${colors.fontGray};
    }
  }
`;

interface INewsComp {
  news: INews;
  setModalOpen: () => void;
}

export const News: FC<INewsComp> = ({ news, setModalOpen }) => {
  return (
    <NewsStyled onClick={setModalOpen}>
      <div className="photo">
        <img className="photo_img" src={news.photoURL[0]} alt={news.id} />
        {icons.triangle}
      </div>

      <div className="content">
        <div className="content_type">{news.type}</div>

        <h3 className="content_title">{news.title}</h3>

        <div className="content_content">{news.content}</div>

        <div className="content_date">{news.date}</div>
      </div>
    </NewsStyled>
  );
};
