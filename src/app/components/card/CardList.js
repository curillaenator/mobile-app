import styled from "styled-components";

import { Card } from "./Card";

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

export const CardList = ({ cardList }) => {
  return (
    <ListStyled>
      <h2 className="list_title font_roboto">Фотобудки</h2>

      <div className="list_sort">Сортировка</div>

      {cardList.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </ListStyled>
  );
};
