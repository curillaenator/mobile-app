import { FC, useReducer } from "react";
import { AnyAction } from "@reduxjs/toolkit";
import Popup from "reactjs-popup";
import styled from "styled-components";

import { ButtonOutline } from "../buttons/ButtonOutline";
import { News } from "./News";
import { NewsModal } from "./NewsModal";

import type { INews, TReducer, TAction } from "../../../types/types";

import { colors } from "../../../utils/colors";

// STATE

const SET_MODAL_MODE = "NewsList/SET_MODAL_MODE";
const SET_CURRENT_NEWS = "NewsList/SET_CURRENT_NEWS";

interface IInitialState {
  modal: boolean;
  curNews: INews | null;
}

const initialState: IInitialState = {
  modal: false,
  curNews: null,
};

const reducer: TReducer<IInitialState, AnyAction> = (state, action) => {
  switch (action.type) {
    case SET_MODAL_MODE:
      return { ...state, modal: action.payload };

    case SET_CURRENT_NEWS:
      return { ...state, curNews: action.payload };

    default:
      return state;
  }
};

const setModal: TAction<boolean> = (payload) => ({
  type: SET_MODAL_MODE,
  payload,
});

const setCurNews: TAction<INews> = (payload) => ({
  type: SET_CURRENT_NEWS,
  payload,
});

// COMPONENT

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
    width: 100%;
    max-width: 375px;
    min-width: 320px;
    height: 100vh;
    background-color: ${colors.backDark25};
  }
`;

const ListStyled = styled.section`
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
  newsList?: INews[];
  newsTotal?: number;
  getNews?: () => void;
}

export const NewsList: FC<INewsList> = ({
  newsList,
  newsTotal = 0,
  getNews = () => console.log("no func"),
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { modal, curNews } = state;

  const isBtnVisible = newsList ? newsList.length < newsTotal : false;

  const handleModalOpen = (news: INews) => {
    dispatch(setCurNews(news));
    dispatch(setModal(true));
  };

  if (!newsList)
    return (
      <ListStyled>
        <div className="head">
          <h2 className="head_title font_roboto">Новостей нет</h2>
        </div>
      </ListStyled>
    );

  return (
    <ListStyled>
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
        onClose={() => dispatch(setModal(false))}
      >
        {(close: () => void) => <NewsModal news={curNews} close={close} />}
      </PopupStyled>
    </ListStyled>
  );
};
