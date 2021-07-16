import { FC } from "react";
import styled from "styled-components";

import { colors } from "../../../utils/colors";

const LoaderStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;

  .loading_text {
    font-size: 16px;
    font-weight: 600;
    color: ${colors.fontDark};
  }
`;

export const LoaderFS: FC = () => {
  return (
    <LoaderStyled>
      <div className="loading_text">Загрузка</div>
    </LoaderStyled>
  );
};
