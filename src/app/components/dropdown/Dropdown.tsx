import { FC, useReducer, useEffect } from "react";
import styled from "styled-components";

import { icons } from "../../../utils/icons";
import { colors } from "../../../utils/colors";

import type { AnyAction } from "@reduxjs/toolkit";
import type { TReducer, TAction, IDropdownOption } from "../../../types/types";

// STATE

const SET_DROPDOWN_OPEN = "dropdown/SET_OPEN";
const SET_LIST = "dropdown/SET_LIST";

interface IInitialState {
  list: IDropdownOption[];
  open: boolean;
}

const initialState: IInitialState = { list: [], open: false };

const reducer: TReducer<IInitialState, AnyAction> = (state, action) => {
  switch (action.type) {
    case SET_LIST:
      return { ...state, list: action.payload };

    case SET_DROPDOWN_OPEN:
      return { ...state, open: action.payload };

    default:
      return state;
  }
};

const setOpen: TAction<boolean> = (payload) => ({
  type: SET_DROPDOWN_OPEN,
  payload,
});

const setList: TAction<IDropdownOption[]> = (payload) => ({
  type: SET_LIST,
  payload,
});

// COMPONENT

interface IOptionStyled {
  selected: boolean;
}

const OptionStyled = styled.button<IOptionStyled>`
  width: 100%;
  height: 32px;
  padding: 0 16px;
  white-space: nowrap;
  background-color: ${({ selected }) =>
    selected ? colors.primaryPeach : "transparent"};
  cursor: pointer;
  color: ${({ selected }) => (selected ? colors.fontWhite : colors.fontDark)};
  font-size: 14px;
  transition: 0.08s linear;

  &:hover {
    background-color: ${colors.primaryPeachHover};
    color: ${colors.fontWhite};
  }

  &:active {
    background-color: ${colors.primaryPeachActive};
    color: ${colors.fontWhite};
  }
`;

interface IDropdownStyled {
  open: boolean;
}

const DropdownStyled = styled.div<IDropdownStyled>`
  position: relative;
  width: fit-content;

  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: fit-content;
    height: 32px;
    padding: 0 8px;
    border: 1px solid ${colors.backGraySemi};
    border-radius: 6px;
    cursor: pointer;
    transition: 0.08s linear;

    &:hover {
      border: 1px solid ${colors.backGrayDark};
    }

    &_title {
      margin-right: 9px;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 24px;
      user-select: none;
    }

    & > svg {
      transform: rotate(${({ open }) => (open ? "180deg" : "0deg")});
    }
  }

  .list {
    position: absolute;
    display: flex;
    flex-direction: column;
    top: 40px;
    left: 0;
    background-color: ${colors.fontWhite};
    border: 1px solid #d5dae0;
    border-radius: 6px;
    overflow: hidden;

    transition: 0.08s ease-out;
    opacity: ${({ open }) => (open ? "1" : "0")};
    transform: translateY(${({ open }) => (open ? "0" : "32px")});
    z-index: ${({ open }) => (open ? 10 : -20)};
    box-shadow: 0px 19px 38px rgba(33, 38, 44, 0.15),
      0px 15px 12px rgba(33, 38, 44, 0.11);
  }
`;

interface IDropdown {
  options: IDropdownOption[];
  handleChange: (list: any[]) => void;
}

export const Dropdown: FC<IDropdown> = ({ options, handleChange }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { list, open } = state;

  useEffect(() => dispatch(setList(options)), [options]);

  const handleOption = (clickedOpt: IDropdownOption) => {
    const listUpd = list.map((option) =>
      option.id === clickedOpt.id
        ? { ...clickedOpt, checked: true }
        : { ...option, checked: false }
    );

    // dispatch(setList(listUpd));
    dispatch(setOpen(false));
    handleChange(listUpd);
  };

  if (!options) return <div></div>;

  return (
    <DropdownStyled open={open}>
      <div className="title" onClick={() => dispatch(setOpen(!open))}>
        <h4 className="title_title">
          {/* @ts-ignore */}
          {list.length && list.find((o) => o.checked === true).title}
        </h4>

        {icons.arrow}
      </div>

      <div className="list">
        {list.map((opt) => (
          <OptionStyled
            key={opt.id}
            selected={opt.checked}
            onClick={() => handleOption(opt)}
          >
            {opt.title}
          </OptionStyled>
        ))}
      </div>
    </DropdownStyled>
  );
};
