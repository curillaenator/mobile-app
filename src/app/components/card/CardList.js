import { useState } from "react";
import Popup from "reactjs-popup";
import styled from "styled-components";

import { Dropdown } from "../dropdown/Dropdown";
import { Card } from "./Card";
import { Order } from "../order/Order";

import { sortOptions } from "../../../api/fakecontent";

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
  .list_title {
    margin-bottom: 20px;
    padding: 0 16px;
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 42px;
  }

  .list_sort {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    padding: 0 16px;
    /* z-index: 50000; */

    &-title {
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 16px;
      margin-right: 8px;
    }
  }
`;

export const CardList = ({ cardList, order, handleOrder, setCardSort }) => {
  const [open, setOpen] = useState(false);
  const closeOrder = () => setOpen(false);
  const openOrder = () => setOpen(true);

  const [sort, setSort] = useState(sortOptions);
  const handleSort = (updOptions) => {
    setSort(updOptions);

    const type = updOptions.find((opt) => opt.checked === true).type;
    setCardSort(type);
  };

  return (
    <ListStyled>
      <h2 className="list_title font_roboto">Фотобудки</h2>

      <div className="list_sort">
        <h4 className="list_sort-title">Сортировка: </h4>
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
