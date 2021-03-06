import { FC, useEffect, useReducer } from "react";
import { Carousel } from "react-responsive-carousel";
import { Scrollbars } from "rc-scrollbars";
import styled from "styled-components";

import { Button } from "../buttons/Button";
import { Photo } from "../photo/Photo";
import { ThumbV } from "../scrollbar/ThumbV";
import { Pricer } from "../pricer/Pricer";

import { colors } from "../../../utils/colors";
import { icons } from "../../../utils/icons";

import type { AnyAction } from "@reduxjs/toolkit";
import type {
  ICard,
  ICardRent,
  ICardOption,
  TReducer,
  TAction,
} from "../../../types/types";

// ---- CARD STATE ----

const SET_OPTIONS = "card/SET_OPTIONS";
const SET_OPT_PRICE = "booth/SET_OPT_PRICE";
const SET_RENT = "booth/SET_RENT";
const SET_RENT_PRICE = "booth/SET_RENT_PRICE";

interface IInitialState {
  options: ICardOption[];
  optPrice: number;
  rent: ICardRent[];
  rentPrice: number;
}

const initialState: IInitialState = {
  options: [],
  optPrice: 0,
  rent: [],
  rentPrice: 0,
};

const reducer: TReducer<IInitialState, AnyAction> = (state, action) => {
  switch (action.type) {
    case SET_OPTIONS:
      return { ...state, options: action.payload };

    case SET_OPT_PRICE:
      return { ...state, optPrice: action.payload };

    case SET_RENT:
      return { ...state, rent: action.payload };

    case SET_RENT_PRICE:
      return { ...state, rentPrice: action.payload };

    default:
      return state;
  }
};

const setOptions: TAction<ICardOption[]> = (payload) => ({
  type: SET_OPTIONS,
  payload,
});

const setOptionsPrice: TAction<number> = (payload) => ({
  type: SET_OPT_PRICE,
  payload,
});

const setRent: TAction<ICardRent[]> = (payload) => ({
  type: SET_RENT,
  payload,
});

const setRentPrice: TAction<number> = (payload) => ({
  type: SET_RENT_PRICE,
  payload,
});

// ---- COMPONENT ----

// css styled
interface IOption {
  selected: boolean;
}

const OptionStyled = styled.div<IOption>`
  display: flex;
  align-items: center;
  width: 100%;
  height: 76px;
  border-bottom: 1px solid #ebebeb;
  background-color: ${colors.backLightGray};
  cursor: pointer;
  transition: 0.08s linear;

  &:hover {
    background-color: ${colors.backGray};
  }

  .photo {
    flex-shrink: 0;
    width: 60px;
    height: 60px;
    margin: 0 8px;
    border-radius: 4px;
    object-fit: cover;
  }

  .body {
    padding: 6px 0;
    width: 100%;

    &_title {
      margin-bottom: 12px;
      font-style: normal;
      font-weight: 700;
      font-size: 14px;
      line-height: 18px;
    }

    &_price {
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
      line-height: 18px;
      color: ${colors.primaryPeach};
    }
  }

  .select {
    display: flex;
    align-items: center;
    flex-shrink: 0;
    width: 13px;
    height: 13px;
    margin: 0 16px 0 6px;
    border-radius: 2px;
    border: 1px solid ${colors.primaryPeach};
    transition: 0.08s linear;
    background-color: ${({ selected }) =>
      selected ? colors.primaryPeach : "transparent"};
  }
`;

const RentOptionStyled = styled.div<IOption>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  height: 26px;
  margin: 0 8px 8px 0;
  padding: 0 12px;
  border-radius: 6px;
  background-color: ${({ selected }) =>
    selected ? colors.primaryPeach : colors.backGray};
  cursor: pointer;
  transition: 0.08s linear;

  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: ${({ selected }) => (selected ? colors.fontWhite : colors.fontDark)};
  user-select: none;
`;

const CardStyled = styled.div`
  margin-bottom: 30px;
  padding: 16px 16px 18px 16px;
  box-shadow: 0 4px 20px ${colors.shadow};

  .carousel {
    margin-bottom: 32px;
  }

  .info {
    margin-bottom: 24px;

    &_title {
      margin-bottom: 3px;
      font-style: normal;
      font-weight: 700;
      font-size: 20px;
      line-height: 23px;
    }

    &_size {
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
      line-height: 14px;

      &-title {
        color: ${colors.fontDark};
      }

      &-size {
        color: ${colors.fontGray};
      }
    }
  }

  .options {
    margin-bottom: 10px;

    &_title {
      display: flex;
      align-items: center;
      justify-content: center;
      width: fit-content;
      height: 22px;
      padding: 0 4px;
      border-bottom: 2px solid ${colors.primaryPeach};
      background-color: ${colors.backLightGray};

      font-style: normal;
      font-weight: 700;
      font-size: 12px;
      line-height: 14px;
      color: ${colors.primaryPeach};
    }
  }

  .rent {
    margin-bottom: 20px;

    &_title {
      margin-bottom: 8px;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 18px;
      color: ${colors.fontGrayDark};
    }

    &_options {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
    }
  }

  .cta {
    display: flex;
    justify-content: space-between;
    align-items: center;

    &_price {
      font-style: normal;
      font-weight: 600;
      font-size: 32px;
      line-height: 42px;
    }
  }

  @media (max-width: 375px) {
    .cta {
      &_price {
        font-size: 24px;
      }
    }
  }
`;

// main component
interface ICardComp {
  card: ICard;
  handleOrder: (order: ICard) => void;
  openOrder: () => void;
}

export const Card: FC<ICardComp> = ({ card, handleOrder, openOrder }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const initialPrice = card.rent[0].priceQ * +card.price;
    const initRentOpt = card.rent.map((opt, i) =>
      i === 0 ? { ...opt, checked: true } : opt
    );
    dispatch(setOptions(card.options));
    dispatch(setRent(initRentOpt));

    dispatch(setRentPrice(initialPrice));
  }, [card]);

  const handleOption = (option: ICardOption, index: number) => {
    const { price } = option;

    const optionUpd = { ...option, checked: !option.checked };
    const optionsUpd = [...state.options];
    optionsUpd.splice(index, 1, optionUpd);

    dispatch(setOptions(optionsUpd));

    if (option.checked) dispatch(setOptionsPrice(+state.optPrice - price));

    if (!option.checked) dispatch(setOptionsPrice(+state.optPrice + price));
  };

  const handleRent = (rentOpt: ICardRent, index: number) => {
    const { priceQ } = rentOpt;

    const rentUpd = state.rent.map((opt, i) =>
      i === index ? { ...opt, checked: true } : { ...opt, checked: false }
    );

    dispatch(setRent(rentUpd));
    dispatch(setRentPrice(card.price * priceQ));
  };

  const orderHandler = () => {
    const order = { ...card, options: state.options, rent: state.rent };
    handleOrder(order);
    openOrder();
  };

  return (
    <CardStyled>
      <div className="carousel">
        <Carousel
          showStatus={false}
          showThumbs={false}
          autoPlay={false}
          dynamicHeight
        >
          {card.photos.map((url, i) => (
            <Photo url={url} key={i} ratio={0.75} />
          ))}
        </Carousel>
      </div>

      <div className="info">
        <h3 className="info_title">{card.title}</h3>

        <div className="info_size">
          <span className="info_size-title">????????????: </span>
          <span className="info_size-size">{card.size}</span>
        </div>
      </div>

      <div className="options">
        <h4 className="options_title">??????. ??????????</h4>

        <Scrollbars
          autoHide
          style={{ height: 152 }}
          renderThumbVertical={(props) => <ThumbV {...props} />}
        >
          {state.options.map((option, i) => (
            <OptionStyled
              key={option.id}
              selected={option.checked}
              onClick={() => handleOption(option, i)}
            >
              <img className="photo" src={option.photo} alt={option.title} />

              <div className="body">
                <h4 className="body_title">{option.title}</h4>

                <div className="body_price font_roboto">
                  <span>???? </span>
                  <Pricer number={option.price} />
                </div>
              </div>

              <div className="select">{icons.check}</div>
            </OptionStyled>
          ))}
        </Scrollbars>
      </div>

      <div className="rent">
        <h4 className="rent_title">?????????????? ?????????? ????????????</h4>

        <div className="rent_options">
          {state.rent.map((opt, i) => (
            <RentOptionStyled
              key={opt.id}
              onClick={() => handleRent(opt, i)}
              selected={opt.checked}
            >
              {opt.title}
            </RentOptionStyled>
          ))}
        </div>
      </div>

      <div className="cta">
        <div className="cta_price font_roboto">
          <Pricer number={+state.optPrice + state.rentPrice} />
        </div>

        <Button title="???????????????? ????????????" handler={orderHandler} />
      </div>
    </CardStyled>
  );
};
