import { batch } from "react-redux";
import { fakeApi } from "../../api/fakeApi";

import type { Reducer, AnyAction } from "@reduxjs/toolkit";
import type {
  IInitialState,
  ICard,
  INews,
  IFaq,
  TAction,
  TThunk,
} from "../../types/types";

const SET_INITIALIZE = "main/SET_INIT";
const SET_VIDEO_URL = "main/SET_VIDEO_URL";
const SET_CARDLIST = "main/SET_BOOTHLIST";
const SET_CURRENT_ORDER = "main/SET_ORDER";
const SET_FAQ_LIST = "main/SET_FAQ_LIST";
const SET_NEWSLIST = "main/SET_NEWSLIST";
const SET_NEWSCURP = "main/SET_NEWSCURP";
const SET_NEWSTOTAL = "main/SET_NEWSTOTAL";

const initialState: IInitialState = {
  isInit: false,
  videoURL: "",
  cardList: [],
  order: null,
  faqList: [],
  newsTotal: 0,
  newsList: [],
  newsPSize: 3,
  newsCurP: 1,
};

export const main: Reducer<IInitialState, AnyAction> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case SET_INITIALIZE:
      return { ...state, isInit: action.payload };

    case SET_VIDEO_URL:
      return { ...state, videoURL: action.payload };

    case SET_CARDLIST:
      return { ...state, cardList: action.payload };

    case SET_CURRENT_ORDER:
      return { ...state, order: action.payload };

    case SET_FAQ_LIST:
      return { ...state, faqList: action.payload };

    case SET_NEWSTOTAL:
      return { ...state, newsTotal: action.payload };

    case SET_NEWSLIST:
      return { ...state, newsList: action.payload };

    case SET_NEWSCURP:
      return { ...state, newsCurP: action.payload };

    default:
      return state;
  }
};

// ACTION CREATORS

const setInit: TAction<boolean> = (payload) => ({
  type: SET_INITIALIZE,
  payload,
});

const setVideoURL: TAction<string> = (payload) => ({
  type: SET_VIDEO_URL,
  payload,
});

const setCardList: TAction<ICard[]> = (payload) => ({
  type: SET_CARDLIST,
  payload,
});

const setOrder: TAction<ICard> = (payload) => ({
  type: SET_CURRENT_ORDER,
  payload,
});

const setFaqList: TAction<IFaq[]> = (payload) => ({
  type: SET_FAQ_LIST,
  payload,
});

const setNewsTotal: TAction<number> = (payload) => ({
  type: SET_NEWSTOTAL,
  payload,
});

const setNewsList: TAction<INews[]> = (payload) => ({
  type: SET_NEWSLIST,
  payload,
});

const setNewsCurP: TAction<number> = (payload) => ({
  type: SET_NEWSCURP,
  payload,
});

// THUNKS

export const getInitial = (): TThunk => async (dispatch, getState) => {
  const pSize = getState().main.newsPSize;

  const videoURL = await fakeApi.getVideoURL();
  const cardList = await fakeApi.getBoothList();
  const newsList = await fakeApi.getNewsList(0, pSize);
  const faqList = await fakeApi.getFaqList();
  const newsTotal = await fakeApi.getTotalNews();

  await batch(() => {
    dispatch(setVideoURL(videoURL));
    dispatch(setCardList(cardList));
    dispatch(setNewsList(newsList));
    dispatch(setNewsTotal(newsTotal));
    dispatch(setFaqList(faqList));
  });

  dispatch(setInit(true));
};

export const handleOrder = (order: ICard): TThunk => {
  return (dispatch) => {
    dispatch(setOrder(order));
  };
};

export const setCardSort = (sortBy: string): TThunk => {
  return (dispatch, getState) => {
    const sort = {
      asc: () => {
        return [...getState().main.cardList].sort((a, b) => a.price - b.price);
      },
      desc: () => {
        return [...getState().main.cardList].sort((a, b) => b.price - a.price);
      },
    };

    if (sortBy === "ascending") return dispatch(setCardList(sort.asc()));
    if (sortBy === "descending") return dispatch(setCardList(sort.desc()));
  };
};

export const getNews = (): TThunk => async (dispatch, getState) => {
  const newsList = getState().main.newsList;
  const pSize = getState().main.newsPSize;

  const news = await fakeApi.getNewsList(newsList.length, pSize);

  batch(() => {
    dispatch(setNewsList([...newsList, ...news]));
    dispatch(setNewsCurP(getState().main.newsCurP + 1));
  });
};
