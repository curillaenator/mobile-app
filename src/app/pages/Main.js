import { useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { LoaderFS } from "../components/loaders/LoaderFS";
import { Header } from "../components/header/Header";
import { Video } from "../components/video/Video";
import { Info } from "../components/info/Info";
import { CardList } from "../components/card/CardList";

import { getInitial, getOrder } from "../../redux/reducers/main";

import { infoContent } from "../../api/fakecontent";

const MainStyled = styled.main``;

const MainPage = ({ isInit, cardList, getInitial, getOrder }) => {
  useEffect(() => getInitial(), [getInitial]);

  if (!isInit) return <LoaderFS />;

  return (
    <MainStyled>
      <Header />

      <Video />

      <Info content={infoContent} />

      <CardList cardList={cardList} getOrder={getOrder} />
    </MainStyled>
  );
};

const mstp = (state) => ({
  isInit: state.main.isInit,
  cardList: state.main.cardList,
});

export const Main = connect(mstp, { getInitial, getOrder })(MainPage);
