import styled from "styled-components";

import { colors } from "../../../utils/colors";

const ButtonStyled = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ fullwidth }) => (fullwidth ? "100%" : "fit-content")};
  height: ${({ height }) => height}px;
  padding: 0 16px;
  border-radius: 6px;
  border: 2px solid ${colors.primaryPeach};
  background-color: ${colors.backWhite};
  transition: 0.08s linear;
  cursor: pointer;

  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  color: ${colors.primaryPeach};
  user-select: none;

  &:hover {
    background-color: ${colors.primaryPeach25};
    border: 2px solid ${colors.primaryPeach25};
    color: ${colors.fontWhite};
  }

  &:active {
    background-color: ${colors.primaryPeachActive};
    border: 2px solid ${colors.primaryPeachActive};
    color: ${colors.fontWhite};
  }
`;

export const ButtonOutline = ({
  title = "Button",
  fullwidth = false,
  height = 40,
  active = false,
  disabled = false,
  handler = () => console.log("outlined"),
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
