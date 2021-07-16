import { FC, useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";
// import styled from "styled-components";

import { LoaderFS } from "../components/loaders/LoaderFS";
import { Header } from "../components/header/Header";
import { Video } from "../components/video/Video";
import { Info } from "../components/info/Info";
import { CardList } from "../components/card/CardList";
import { Faq } from "../components/faq/Faq";
import { NewsList } from "../components/news/NewsList";

import {
  getInitial,
  handleOrder,
  setCardSort,
  getNews,
} from "../../redux/reducers/main";

import type { TState } from "../../redux/store";

import { infoContent } from "../../api/fakecontent";

type TMainPage = ConnectedProps<typeof connector>;

const MainPage: FC<TMainPage> = ({
  isInit,
  videoURL,
  cardList,
  order,
  faqList,
  newsList,
  newsTotal,
  getInitial,
  handleOrder,
  setCardSort,
  getNews,
}) => {
  useEffect(() => getInitial(), [getInitial]);

  if (!isInit) return <LoaderFS />;

  return (
    <main>
      <Header />

      <Video videoURL={videoURL} />

      <Info content={infoContent} />

      <CardList
        cardList={cardList}
        order={order}
        handleOrder={handleOrder}
        setCardSort={setCardSort}
      />

      <Faq faqList={faqList} />

      <NewsList newsList={newsList} newsTotal={newsTotal} getNews={getNews} />
    </main>
  );
};

const mstp = (state: TState) => ({
  isInit: state.main.isInit,
  videoURL: state.main.videoURL,
  cardList: state.main.cardList,
  order: state.main.order,
  faqList: state.main.faqList,
  newsList: state.main.newsList,
  newsTotal: state.main.newsTotal,
});

const mdtp = {
  getInitial,
  handleOrder,
  setCardSort,
  getNews,
};

const connector = connect(mstp, mdtp);

export const Main = connector(MainPage);
