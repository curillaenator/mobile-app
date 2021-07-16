import { FC, useState } from "react";
import styled from "styled-components";

import { Accordion } from "../accordion/Accordion";

import { icons } from "../../../utils/icons";
import { colors } from "../../../utils/colors";

import type { IFaq } from "../../../types/types";

interface IItemStyled {
  open: boolean;
}

const ItemStyled = styled.div<IItemStyled>`
  margin-bottom: 10px;

  .item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 48px;
    margin-bottom: ${({ open }) => (open ? "10px" : "0")};
    padding: 0 13px 0 8px;
    border-radius: 4px;
    background-color: ${({ open }) =>
      open ? colors.primaryPeach : colors.backWhite};
    cursor: pointer;
    box-shadow: ${({ open }) =>
      open ? "none" : "0px 4px 20px rgba(0, 0, 0, 0.1)"};
    transition: 0.08s linear;

    &_title {
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 19px;
      color: ${({ open }) => (open ? colors.fontWhite : colors.fontDark)};
      user-select: none;
    }

    & > svg {
      width: 14px;
      height: 8px;
      transform: rotate(${({ open }) => (open ? "180deg" : "0")});

      & > path {
        stroke: ${({ open }) =>
          open ? colors.fontWhite : colors.primaryPeach};
      }
    }
  }

  .body {
    padding: 4px 9px;
    border-left: 1px solid ${colors.primaryPeach};

    &_content {
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 16px;
      color: ${colors.fontGray};
    }
  }
`;

interface IFaqitem {
  item: IFaq;
}

export const FaqItem: FC<IFaqitem> = ({ item }) => {
  const [open, setOpen] = useState(false);

  return (
    <ItemStyled open={open}>
      <div className="item" onClick={() => setOpen(!open)}>
        <h4 className="item_title">{item.title}</h4>
        {icons.arrow}
      </div>

      <Accordion open={open} openSpeed={0.16} minHeight={0}>
        <div className="body">
          <p className="body_content">{item.content}</p>
        </div>
      </Accordion>
    </ItemStyled>
  );
};
