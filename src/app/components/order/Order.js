import { useReducer, useEffect } from "react";
import InputMask from "react-input-mask";
import styled from "styled-components";

import { Button } from "../buttons/Button";
import { ButtonSecondary } from "../buttons/ButtonSecondary";
import { Dropdown } from "../dropdown/Dropdown";

import { colors } from "../../../utils/colors";
import { icons } from "../../../utils/icons";

// STATE MANAGEMENT

const SET_OPTIONS = "order/SET_OPTIONS";
const SET_RENT = "order/SET_RENT";
const SET_PRICE = "order/SET_PRICE";
const SET_TEL = "order/SET_TEL";
const SET_CALLME = "order/SET_CALLME";

const initialState = {
  options: [],
  rent: [],
  price: 250000,
  tel: "",
  callme: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case SET_OPTIONS:
      return { ...state, options: action.payload };

    case SET_RENT:
      return { ...state, rent: action.payload };

    case SET_PRICE:
      return { ...state, price: action.payload };

    case SET_TEL:
      return { ...state, tel: action.payload };

    case SET_CALLME:
      return { ...state, callme: action.payload };

    default:
      return state;
  }
};

const setOptions = (payload) => ({ type: SET_OPTIONS, payload });
const setRent = (payload) => ({ type: SET_RENT, payload });
const setPrice = (payload) => ({ type: SET_PRICE, payload });
const setTel = (payload) => ({ type: SET_TEL, payload });
const setCallme = (payload) => ({ type: SET_CALLME, payload });

// COMPONENT

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
      cursor: pointer;
      transition: 0.08s linear;

      &:hover {
        transform: scale(1.2);
      }

      &:active {
        transform: scale(1);
      }
    }
  }

  .info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 40px;

    &_titles {
      margin-bottom: 8px;

      &-name {
        margin-bottom: 2px;
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 18px;
      }

      &-sizes {
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 14px;
      }
    }

    &_price {
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 18px;
      text-align: right;
    }
  }

  .rent {
    margin-bottom: 20px;
  }

  .option_list {
    border-bottom: 1px solid #ebebeb;

    .option {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 50px;
      padding-right: 40px;

      &_title {
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 18px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      &_price {
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 18px;
        text-align: right;
      }
    }
  }

  .price {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 74px;
    margin-bottom: 8px;

    &_title {
      font-style: normal;
      font-weight: 700;
      font-size: 20px;
      line-height: 23px;
    }

    &_price {
      font-style: normal;
      font-weight: 500;
      font-size: 32px;
      line-height: 42px;
    }
  }

  .callme {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 40px;
    margin-bottom: 12px;
    padding: 0 4px;
    border: 1px solid ${colors.primaryPeach};
    border-radius: 6px;

    &_input {
      width: 100%;
      padding-left: 6px;
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
    }

    &_button {
      flex-shrink: 0;
    }
  }
`;

export const Order = ({ order, closeOrder }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch(setOptions(order.options.filter((opt) => opt.checked)));
    dispatch(setRent(order.rent));
  }, [order.options, order.rent]);

  useEffect(() => {
    const optsPrice = state.options.length
      ? state.options.reduce((sum, opt) => sum + opt.price, 0)
      : 0;

    const rentPrice = state.rent.length
      ? state.rent.find((r) => r.checked).priceQ * order.price
      : order.price;

    dispatch(setPrice(rentPrice + optsPrice));
  }, [state.options, state.rent]);

  const handleRent = (rentList) => dispatch(setRent(rentList));

  return (
    <OrderStyled>
      <div className="head">
        <h2 className="head_title font_roboto">Ваша заявка</h2>
        <button className="head_button" onClick={closeOrder}>
          {icons.close}
        </button>
      </div>

      <div className="info">
        <div className="info_titles">
          <h4 className="info_titles-name">{order.title}</h4>
          <div className="info_titles-sizes">
            <span>Размер: </span>
            <span style={{ color: colors.fontGray }}>{order.size}</span>
          </div>
        </div>

        <div className="info_price">{order.price} ₽</div>
      </div>

      <div className="rent">
        <Dropdown options={state.rent} handleChange={handleRent} />
      </div>

      <div className="option_list">
        {state.options.map((opt) => (
          <div className="option" key={opt.id}>
            <h4 className="option_title">{opt.title}</h4>
            <div className="option_price">{opt.price} ₽</div>
          </div>
        ))}
      </div>

      <div className="price">
        <h4 className="price_title">Итого:</h4>
        <div className="price_price font_roboto">{state.price} ₽</div>
      </div>

      <div className="callme">
        <InputMask
          className="callme_input"
          type="tel"
          value={state.tel}
          mask="+7 (999) 999 99 99"
          placeholder="+7 (999) 555 44 33"
          onChange={(e) => dispatch(setTel(e.target.value))}
        />

        <div className="callme_button">
          <ButtonSecondary
            title={state.callme ? "Не звонить" : "Позвоните мне"}
            active={state.callme}
            height={32}
            handler={() => dispatch(setCallme(!state.callme))}
          />
        </div>
      </div>

      <Button title="Отправить заявку" fullwidth handler={closeOrder} />
    </OrderStyled>
  );
};
