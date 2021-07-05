import styled from "styled-components";

import { colors } from "../../../utils/colors";

const ButtonStyled = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  min-height: 40px;
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

export const PrimaryButton = ({
  title = "Button",
  active = false,
  disabled = false,
  handler = () => console.log("prim"),
}) => {
  return (
    <ButtonStyled
      //   className="font_roboto"
      onClick={handler}
      active={active}
      disabled={disabled}
    >
      {title}
    </ButtonStyled>
  );
};
