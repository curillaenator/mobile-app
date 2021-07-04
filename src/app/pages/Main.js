import styled from "styled-components";

import { Header } from "../components/header/Header";
import { Video } from "../components/video/Video";
import { Info } from "../components/info/Info";

import { infoContent } from "../api/fakecontent";

const MainStyled = styled.main``;

export const Main = () => {
  return (
    <MainStyled>
      <Header />

      <Video />

      <Info content={infoContent} />
    </MainStyled>
  );
};
