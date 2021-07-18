import { FC, useState } from "react";
import Popup from "reactjs-popup";
import styled from "styled-components";

import { ButtonOutline } from "../buttons/ButtonOutline";
import { News } from "./News";
import { NewsModal } from "./NewsModal";

import type { INews } from "../../../types/types";

import { colors } from "../../../utils/colors";

const PopupStyled = styled(Popup)`
  &-overlay {
    padding: 0;
    margin: 0;
  }

  &-content {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 0 16px;
    margin: 0;
    max-width: 375px;
    min-width: 375px;
    height: 100vh;
    background-color: ${colors.backDark25};
  }
`;

interface IListStyled {
  loaded: boolean;
}

const ListStyled = styled.section<IListStyled>`
  padding: 0 16px;
  margin-bottom: 60px;

  .head {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;

    &_title {
      font-style: normal;
      font-weight: bold;
      font-size: 32px;
      line-height: 36px;
    }
  }

  .list {
    margin-bottom: 30px;
  }
`;

interface INewsList {
  newsList: INews[];
  newsTotal: number;
  getNews: () => void;
}

export const NewsList: FC<INewsList> = ({ newsList, newsTotal, getNews }) => {
  const [modal, setModal] = useState(false);
  const [curNews, setCurNews] = useState(newsList[1]);

  const isBtnVisible = newsList.length < newsTotal;

  const handleModalOpen = (news: INews) => {
    setCurNews(news);
    setModal(true);
  };

  return (
    <ListStyled loaded={isBtnVisible}>
      <div className="head">
        <h2 className="head_title font_roboto">Новости</h2>
      </div>

      <div className="list">
        {newsList.map((news) => (
          <News
            key={news.id}
            news={news}
            setModalOpen={() => handleModalOpen(news)}
          />
        ))}
      </div>

      {isBtnVisible && (
        <div className="buttons">
          <ButtonOutline title="Показать еще" fullwidth handler={getNews} />
        </div>
      )}

      <PopupStyled
        open={modal}
        modal
        arrow={false}
        lockScroll
        closeOnDocumentClick
        onClose={() => setModal(false)}
      >
        {(close: () => void) => <NewsModal news={curNews} close={close} />}
      </PopupStyled>
    </ListStyled>
  );
};
