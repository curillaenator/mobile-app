import { batch } from "react-redux";
import { fakeApi } from "../../api/fakeApi";

const SET_INIT = "main/SET_INIT";
const SET_CARDLIST = "main/SET_BOOTHLIST";
const SET_ORDER = "main/SET_ORDER";
const SET_NEWSLIST = "main/SET_NEWSLIST";
const SET_NEWSCURP = "main/SET_NEWSCURP";
const SET_NEWSTOTAL = "main/SET_NEWSTOTAL";

const initialState = {
  isInit: false,
  cardList: null,
  order: null,
  newsTotal: 0,
  newsList: null,
  newsPSize: 3,
  newsCurP: 1,
};

export const main = (state = initialState, action) => {
  switch (action.type) {
    case SET_INIT:
      return { ...state, isInit: action.payload };

    case SET_CARDLIST:
      return { ...state, cardList: action.payload };

    case SET_ORDER:
      return { ...state, order: action.payload };

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

const setInit = (payload) => ({ type: SET_INIT, payload });
const setCardList = (payload) => ({ type: SET_CARDLIST, payload });
const setOrder = (payload) => ({ type: SET_ORDER, payload });
const setNewsTotal = (payload) => ({ type: SET_NEWSTOTAL, payload });
const setNewsList = (payload) => ({ type: SET_NEWSLIST, payload });
const setNewsCurP = (payload) => ({ type: SET_NEWSCURP, payload });

// THUNKS

export const getInitial = () => async (dispatch, getState) => {
  const pSize = getState().main.newsPSize;

  const cardList = await fakeApi.getBoothList();
  const newsList = await fakeApi.getNewsList(0, pSize);
  const newsTotal = await fakeApi.getTotalNews();

  batch(() => {
    dispatch(setCardList(cardList));
    dispatch(setNewsList(newsList));
    dispatch(setNewsTotal(newsTotal));
    dispatch(setInit(true));
  });
};

export const handleOrder = (order) => (dispatch) => {
  dispatch(setOrder(order));
};

export const setCardSort = (sortBy) => (dispatch, getState) => {
  const sort = {
    ascending: () => {
      return [...getState().main.cardList].sort((a, b) => a.price - b.price);
    },
    descending: () => {
      return [...getState().main.cardList].sort((a, b) => b.price - a.price);
    },
  };

  dispatch(setCardList(sort[sortBy]()));
};

export const getNews = () => async (dispatch, getState) => {
  const newsList = getState().main.newsList;
  const pSize = getState().main.newsPSize;

  const news = await fakeApi.getNewsList(newsList.length, pSize);

  batch(() => {
    dispatch(setNewsList([...newsList, ...news]));
    dispatch(setNewsCurP(getState().main.newsCurP + 1));
  });
};
