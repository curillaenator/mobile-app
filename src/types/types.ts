import { ThunkAction, AnyAction } from "@reduxjs/toolkit";
import type { TState } from "../redux/store";

export interface ICardRent {
  id: string;
  title: string;
  priceQ: number;
  checked: boolean;
}

export interface ICardOptions {
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
  photos: any[];
  options: ICardOptions[];
  rent: ICardRent[];
  price: number;
}

export interface INews {
  id: string;
  title: string;
  type: string;
  photoURL: any;
  content: string;
  date: string;
}

export interface IInitialState {
  isInit: boolean;
  cardList: ICard[];
  order: ICard | null;
  newsTotal: number;
  newsList: INews[];
  newsPSize: number;
  newsCurP: number;
}

export type TAction<T> = (payload?: T) => { type: string; payload?: T };
export type TThunk = ThunkAction<void, TState, unknown, AnyAction>;
