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
`;

export const Button = ({
  title = "Button",
  fullwidth = false,
  height = 40,
  secondary = false,
  active = false,
  disabled = false,
  handler = () => console.log("prim"),
}) => {
  return (
    <ButtonStyled
      onClick={handler}
      fullwidth={fullwidth}
      height={height}
      secondary={secondary}
      active={active}
      disabled={disabled}
    >
      {title}
    </ButtonStyled>
  );
};
