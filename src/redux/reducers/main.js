import { batch } from "react-redux";
import { fakeApi } from "../../api/fakeApi";

const SET_INIT = "main/SET_INIT";
const SET_BOOTHLIST = "main/SET_BOOTHLIST";

const initialState = {
  isInit: false,
  boothList: null,
};

export const main = (state = initialState, action) => {
  switch (action.type) {
    case SET_INIT:
      return { ...state, isInit: action.payload };

    case SET_BOOTHLIST:
      return { ...state, boothList: action.payload };

    default:
      return state;
  }
};

// ACTION CREATORS

const setInit = (payload) => ({ type: SET_INIT, payload });
const setBoothList = (payload) => ({ type: SET_BOOTHLIST, payload });

// THUNKS

export const getInitial = () => async (dispatch) => {
  const boothList = await fakeApi.getBoothList();

  batch(() => {
    dispatch(setBoothList(boothList));
    dispatch(setInit(true));
  });
};
