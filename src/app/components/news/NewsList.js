import styled from "styled-components";

import { ButtonOutline } from "../buttons/ButtonOutline";
import { News } from "./News";

const ListStyled = styled.section`
  padding: 0 16px;
  margin-bottom: 60px;

  .head {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;

    &_title {
      font-style: normal;
      font-weight: bold;
      font-size: 32px;
      line-height: 36px;
    }
  }

  .list {
    margin-bottom: 30px;
  }
`;

export const NewsList = ({ newsList, newsTotal, getNews }) => {
  const isBtnVisible = (newsList.length || []) < newsTotal;

  return (
    <ListStyled loaded={isBtnVisible}>
      <div className="head">
        <h2 className="head_title font_roboto">Новости</h2>
      </div>

      <div className="list">
        {newsList.map((news) => (
          <News key={news.id} news={news} />
        ))}
      </div>

      {isBtnVisible && (
        <div className="buttons">
          <ButtonOutline title="Показать еще" fullwidth handler={getNews} />
        </div>
      )}
    </ListStyled>
  );
};
