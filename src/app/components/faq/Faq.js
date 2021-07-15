import styled from "styled-components";

import { FaqItem } from "./FaqItem";

const FaqStyled = styled.section`
  padding: 0 16px;
  margin-bottom: 60px;

  .faqtitle {
    margin-bottom: 20px;
  }
`;

export const Faq = ({ data }) => {
  return (
    <FaqStyled>
      <h2 className="faqtitle">FAQ</h2>

      {data.map((item) => (
        <FaqItem key={item.id} item={item} />
      ))}
    </FaqStyled>
  );
};
