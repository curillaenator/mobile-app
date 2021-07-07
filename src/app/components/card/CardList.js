import { useState } from "react";
import Popup from "reactjs-popup";
import styled from "styled-components";

import { Card } from "./Card";
import { Order } from "../order/Order";

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
    margin-bottom: 20px;
    padding: 0 16px;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
  }
`;

export const CardList = ({ cardList, order, handleOrder }) => {
  const [open, setOpen] = useState(false);
  const closeOrder = () => setOpen(false);
  const openOrder = () => setOpen(true);

  return (
    <ListStyled>
      <h2 className="list_title font_roboto">Фотобудки</h2>

      <div className="list_sort">Сортировка</div>

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
