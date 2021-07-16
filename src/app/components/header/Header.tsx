import { FC } from "react";
import styled from "styled-components";

import logo from "../../../assets/icons/logo.svg";

const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 12px 41px 12px;

  .logo {
  }
`;

export const Header: FC = () => {
  return (
    <HeaderStyled>
      <img className="logo" src={logo} alt="Logo" />
    </HeaderStyled>
  );
};
