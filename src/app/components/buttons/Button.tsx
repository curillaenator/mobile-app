import { FC } from "react";
import styled from "styled-components";

import { colors } from "../../../utils/colors";

export interface IButtonStyled {
  fullwidth: boolean;
  height: number;
  active: boolean;
  disabled: boolean;
}

const ButtonStyled = styled.button<IButtonStyled>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ fullwidth }) => (fullwidth ? "100%" : "fit-content")};
  height: ${({ height }) => height}px;
  padding: 0 16px;
  border-radius: 6px;
  background-color: ${colors.primaryPeach};
  transition: 0.08s linear;
  cursor: pointer;

  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  color: ${colors.fontWhite};
  user-select: none;

  &:hover {
    background-color: ${colors.primaryPeachHover};
  }

  &:active {
    background-color: ${colors.primaryPeachActive};
  }

  @media (max-width: 375px) {
    font-size: 14px;
  }
`;

export interface IButton {
  title: string;
  fullwidth?: boolean;
  height?: number;
  active?: boolean;
  disabled?: boolean;
  handler: () => void;
}

export const Button: FC<IButton> = ({
  title = "Кнопка",
  fullwidth = false,
  height = 40,
  active = false,
  disabled = false,
  handler = () => console.log("prim"),
}) => {
  return (
    <ButtonStyled
      fullwidth={fullwidth}
      height={height}
      active={active}
      disabled={disabled}
      onClick={handler}
    >
      {title}
    </ButtonStyled>
  );
};
