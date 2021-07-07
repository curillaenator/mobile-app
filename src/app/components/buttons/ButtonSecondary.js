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

  &:hover {
    background-color: ${colors.primaryPeachHover};
  }

  &:active {
    background-color: ${colors.primaryPeachActive};
  }
`;

export const ButtonSecondary = ({
  title = "Button",
  fullwidth = false,
  height = 40,
  active = false,
  disabled = false,
  handler = () => console.log("secondary"),
}) => {
  return (
    <ButtonStyled
      onClick={handler}
      fullwidth={fullwidth}
      height={height}
      active={active}
      disabled={disabled}
    >
      {title}
    </ButtonStyled>
  );
};
