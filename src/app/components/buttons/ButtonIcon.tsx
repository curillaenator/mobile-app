import { FC, ReactNode } from "react";
import styled from "styled-components";

import { colors } from "../../../utils/colors";

interface IBtnStyled {
  background: boolean;
}

const BtnStyled = styled.button<IBtnStyled>`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  transition: 0.08s linear;
  background-color: ${({ background }) =>
    background ? colors.backDark25 : "transparent"};

  & > svg {
    width: 18px;
    height: 18px;
    fill: ${colors.fontWhite};
  }

  &:active {
    background-color: ${({ background }) =>
      background ? colors.backDark50 : "transparent"};
  }
`;

interface IButtonIcon {
  icon: ReactNode;
  handler: () => void;
  background?: boolean;
}

export const ButtonIcon: FC<IButtonIcon> = ({
  icon,
  background = false,
  handler,
}) => {
  return (
    <BtnStyled onClick={handler} background={background}>
      {icon}
    </BtnStyled>
  );
};
