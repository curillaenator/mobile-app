import { useState, useRef } from "react";
import Popup from "reactjs-popup";
import styled from "styled-components";

import { Dropdown } from "../dropdown/Dropdown";
import { Card } from "./Card";
import { Order } from "../order/Order";

import { sortOptions } from "../../../api/fakecontent";

import { icons } from "../../../utils/icons";

const StyledPopup = styled(Popup)`
  &-overlay {
    padding: 0;
    margin: 0;
    background-color: #ffffff;
  }

  &-content {
    width: 100%;
    padding: 0;
    margin: 0;
    max-width: 375px;
    min-width: 320px;
  }
`;

const ListStyled = styled.section`
  margin-bottom: 60px;

  .list_title {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    padding: 0 16px;
    cursor: pointer;

    &-label {
      margin-right: 16px;
      font-style: normal;
      font-weight: 700;
      font-size: 32px;
      line-height: 42px;
    }

    & > svg {
      width: 18px;
      height: 10px;
      transform: rotate(${({ height }) => (height ? "180deg" : "0")});
      transition: 0.3s linear;
    }
  }

  .accordion {
    max-height: ${({ height }) => height}px;
    overflow: hidden;
    transition: 0.3s ease-in-out;

    &_sort {
      display: flex;
      align-items: center;
      margin-bottom: 20px;
      padding: 0 16px;

      &-title {
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 16px;
        margin-right: 8px;
      }
    }
  }
`;

export const CardList = ({ cardList, order, handleOrder, setCardSort }) => {
  const listRef = useRef(null);

  const [open, setOpen] = useState(false);
  const closeOrder = () => setOpen(false);
  const openOrder = () => setOpen(true);

  const [listOpen, setListOpen] = useState(false);

  const [sort, setSort] = useState(sortOptions);
  const handleSort = (updOptions) => {
    setSort(updOptions);

    const type = updOptions.find((opt) => opt.checked === true).type;
    setCardSort(type);
  };

  return (
    <ListStyled height={listOpen ? listRef.current.scrollHeight : 0}>
      <div className="list_title" onClick={() => setListOpen(!listOpen)}>
        <h2 className="list_title-label font_roboto">Фотобудки</h2>
        {icons.arrow}
      </div>

      <div className="accordion" ref={listRef}>
        <div className="accordion_sort">
          <h4 className="accordion_sort-title">Сортировка: </h4>
          <Dropdown options={sort} handleChange={handleSort} />
        </div>

        {cardList.map((card) => (
          <Card
            key={card.id}
            card={card}
            handleOrder={handleOrder}
            openOrder={openOrder}
          />
        ))}
      </div>

      <StyledPopup
        open={open}
        onClose={closeOrder}
        arrow={false}
        modal
        lockScroll
        closeOnDocumentClick={false}
      >
        <Order order={order} closeOrder={closeOrder} />
      </StyledPopup>
    </ListStyled>
  );
};
