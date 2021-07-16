import { FC, useState } from "react";
import Popup from "reactjs-popup";
import styled from "styled-components";

import { Dropdown } from "../dropdown/Dropdown";
import { Card } from "./Card";
import { Order } from "../order/Order";
import { Accordion } from "../accordion/Accordion";

import { icons } from "../../../utils/icons";

import type { ICard, ICardSortOption } from "../../../types/types";

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

interface IListStyled {
  listOpen: boolean;
}

const ListStyled = styled.section<IListStyled>`
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
      transform: rotate(${({ listOpen }) => (listOpen ? "180deg" : "0")});
      transition: 0.3s linear;
    }
  }

  .list_sort {
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
`;

export const sortOptions = [
  { id: "opt1", title: "По возрастанию", type: "ascending", checked: true },
  { id: "opt2", title: "По убыванию", type: "descending", checked: false },
];

interface ICardList {
  cardList: ICard[];
  order: ICard | null;
  handleOrder: (order: ICard) => void;
  setCardSort: (sortBy: string) => void;
}

export const CardList: FC<ICardList> = ({
  cardList,
  order,
  handleOrder,
  setCardSort,
}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [listOpen, setListOpen] = useState(false);
  const [sort, setSort] = useState(sortOptions);

  const handleSort = (updOptions: ICardSortOption[]) => {
    setSort(updOptions);
    // @ts-ignore
    const type = updOptions.find((opt) => opt.checked === true).type;
    setCardSort(type);
  };

  return (
    <ListStyled listOpen={listOpen}>
      <div className="list_title" onClick={() => setListOpen(!listOpen)}>
        <h2 className="list_title-label font_roboto">Фотобудки</h2>
        {icons.arrow}
      </div>

      <Accordion open={listOpen} openSpeed={0.3} minHeight={800}>
        <div className="list_sort">
          <h4 className="list_sort-title">Сортировка: </h4>
          <Dropdown options={sort} handleChange={handleSort} />
        </div>

        {cardList.map((card) => (
          <Card
            key={card.id}
            card={card}
            handleOrder={handleOrder}
            openOrder={() => setModalOpen(true)}
          />
        ))}
      </Accordion>

      <StyledPopup
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        arrow={false}
        modal
        lockScroll
        closeOnDocumentClick={false}
      >
        <Order order={order} closeOrder={() => setModalOpen(false)} />
      </StyledPopup>
    </ListStyled>
  );
};
