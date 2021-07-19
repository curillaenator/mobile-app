import { FC } from "react";
import styled from "styled-components";

import { colors } from "../../../utils/colors";

import type { IButtonStyled, IButton } from "./Button";

const ButtonStyled = styled.button<IButtonStyled>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ fullwidth }) => (fullwidth ? "100%" : "fit-content")};
  height: ${({ height }) => height}px;
  padding: 0 16px;
  border-radius: 6px;
  background-color: ${({ active }) =>
    active ? colors.primaryPeach : colors.secondaryGray};
  transition: 0.08s linear;
  cursor: pointer;

  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: ${({ active }) => (active ? colors.fontWhite : colors.fontDark)};
  user-select: none;

  &:active {
    background-color: ${colors.primaryPeachActive};
    color: ${colors.fontWhite};
  }
`;

export const ButtonSecondary: FC<IButton> = ({
  title = "Кнопка",
  fullwidth = false,
  height = 40,
  active = false,
  disabled = false,
  handler = () => console.log("secondary"),
}) => {
  return (
    <ButtonStyled
      fullwidth={fullwidth}
      height={height}
      active={active}
      disabled={disabled}
      role="button"
      onClick={handler}
    >
      {title}
    </ButtonStyled>
  );
};
