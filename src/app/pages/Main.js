import { useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { LoaderFS } from "../components/loaders/LoaderFS";
import { Header } from "../components/header/Header";
import { Video } from "../components/video/Video";
import { Info } from "../components/info/Info";
import { CardList } from "../components/card/CardList";
import { Faq } from "../components/faq/Faq";

import {
  getInitial,
  handleOrder,
  setCardSort,
} from "../../redux/reducers/main";

import { infoContent, faqContent } from "../../api/fakecontent";

const MainStyled = styled.main``;

const MainPage = ({
  isInit,
  cardList,
  order,
  getInitial,
  handleOrder,
  setCardSort,
}) => {
  useEffect(() => getInitial(), [getInitial]);

  if (!isInit) return <LoaderFS />;

  return (
    <MainStyled>
      <Header />

      <Video />

      <Info content={infoContent} />

      <CardList
        cardList={cardList}
        handleOrder={handleOrder}
        order={order}
        setCardSort={setCardSort}
      />

      <Faq data={faqContent} />
    </MainStyled>
  );
};

const mstp = (state) => ({
  isInit: state.main.isInit,
  cardList: state.main.cardList,
  order: state.main.order,
});

export const Main = connect(mstp, { getInitial, handleOrder, setCardSort })(
  MainPage
);
