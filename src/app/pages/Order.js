import { connect } from "react-redux";
import styled from "styled-components";

import { PrimaryButton } from "../components/buttons/PrimaryButton";

// import { colors } from "../../utils/colors";
import { icons } from "../../utils/icons";

const OrderStyled = styled.section`
  width: 100%;
  padding: 16px;

  .head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 32px;

    &_title {
      font-style: normal;
      font-weight: 700;
      font-size: 32px;
      line-height: 42px;
    }

    &_button {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 40px;
      height: 40px;
    }
  }
`;

const OrderPage = () => {
  return (
    <OrderStyled>
      <div className="head">
        <h2 className="head_title font_roboto">Ваша заявка</h2>
        <button className="head_button">{icons.close}</button>
      </div>

      <div className="info"></div>

      <div className="options"></div>

      <div className="price"></div>

      <div className="callme"></div>

      <PrimaryButton title="Отправить заявку" />
    </OrderStyled>
  );
};

const mstp = (state) => ({});

export const Order = connect(mstp, {})(OrderPage);
