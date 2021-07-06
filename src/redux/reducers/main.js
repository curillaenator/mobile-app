import { batch } from "react-redux";
import { fakeApi } from "../../api/fakeApi";

const SET_INIT = "main/SET_INIT";
const SET_CARDLIST = "main/SET_BOOTHLIST";
const SET_ORDER = "main/SET_ORDER";

const initialState = {
  isInit: false,
  cardList: null,
  order: null,
};

export const main = (state = initialState, action) => {
  switch (action.type) {
    case SET_INIT:
      return { ...state, isInit: action.payload };

    case SET_CARDLIST:
      return { ...state, cardList: action.payload };

    case SET_ORDER:
      return { ...state, order: action.payload };

    default:
      return state;
  }
};

// ACTION CREATORS

const setInit = (payload) => ({ type: SET_INIT, payload });
const setCardList = (payload) => ({ type: SET_CARDLIST, payload });
const setOrder = (payload) => ({ type: SET_ORDER, payload });

// THUNKS

export const getInitial = () => async (dispatch) => {
  const cardList = await fakeApi.getBoothList();

  batch(() => {
    dispatch(setCardList(cardList));
    dispatch(setInit(true));
  });
};

export const getOrder = (order) => (dispatch) => {
  dispatch(setOrder(order));
};
