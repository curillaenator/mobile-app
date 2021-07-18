import { ThunkAction, AnyAction } from "@reduxjs/toolkit";
import type { TState } from "../redux/store";

export interface ICardRent {
  id: string;
  title: string;
  priceQ: number;
  checked: boolean;
}

export interface ICardOption {
  id: string;
  photo: any;
  title: string;
  price: number;
  checked: boolean;
}

export interface ICard {
  id: string;
  title: string;
  size: string;
  photos: string[];
  options: ICardOption[];
  rent: ICardRent[];
  price: number;
}

export interface ICardSortOption {
  id: string;
  title: string;
  type: string;
  checked: boolean;
}

export interface INews {
  id: string;
  title: string;
  type: string;
  photoURL: string[];
  content: string;
  date: string;
}

export interface IFaq {
  id: string;
  title: string;
  content: string;
}

export interface IDropdownOption {
  id: string;
  title: string;
  type?: string;
  checked: boolean;
}

//main reducer in redux store
export interface IInitialState {
  isInit: boolean;
  videoURL: string;
  cardList: ICard[];
  order: ICard | null;
  faqList: IFaq[];
  newsTotal: number;
  newsList: INews[];
  newsPSize: number;
  newsCurP: number;
}

export type TAction<T> = (payload?: T) => { type: string; payload?: T }; // Action creator
export type TThunk = ThunkAction<void, TState, unknown, AnyAction>;
export type TReducer<S, A> = (state: S, action: A) => S; // generic reducer type for local state
