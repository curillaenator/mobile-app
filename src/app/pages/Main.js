import { useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { LoaderFS } from "../components/loaders/LoaderFS";
import { Header } from "../components/header/Header";
import { Video } from "../components/video/Video";
import { Info } from "../components/info/Info";
import { BoothList } from "../components/booth/BoothList";

import { getInitial } from "../../redux/reducers/main";

import { infoContent } from "../../api/fakecontent";

const MainStyled = styled.main``;

const MainPage = ({ isInit, boothList, getInitial }) => {
  useEffect(() => getInitial(), [getInitial]);

  if (!isInit) return <LoaderFS />;

  return (
    <MainStyled>
      <Header />

      <Video />

      <Info content={infoContent} />

      <BoothList boothList={boothList} />
    </MainStyled>
  );
};

const mstp = (state) => ({
  isInit: state.main.isInit,
  boothList: state.main.boothList,
});

export const Main = connect(mstp, { getInitial })(MainPage);
