import { useEffect, useReducer } from "react";
import { Carousel } from "react-responsive-carousel";
import { Scrollbars } from "rc-scrollbars";
import styled from "styled-components";

import { PrimaryButton } from "../buttons/PrimaryButton";

import { colors } from "../../../utils/colors";
import { icons } from "../../../utils/icons";

// ---- BOOTH STATE ----

const SET_OPTIONS = "booth/SET_OPTIONS";
const SET_RENT = "booth/SET_RENT";
const SET_PRICE = "booth/SET_PRICE";

const initialState = {
  options: [],
  rent: null,
  price: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case SET_OPTIONS:
      return { ...state, options: action.payload };

    case SET_RENT:
      return { ...state, rent: action.payload };

    case SET_PRICE:
      return { ...state, price: action.payload };

    default:
      return state;
  }
};

const setOptions = (payload) => ({ type: SET_OPTIONS, payload });
const setRent = (payload) => ({ type: SET_RENT, payload });
const setPrice = (payload) => ({ type: SET_PRICE, payload });

// ---- BOOTH COMPONENT ----

// css styled
const OptionStyled = styled.div`
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

const RentOptionStyled = styled.div`
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

const BoothStyled = styled.div`
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
`;

// sub components
const optionsThumb = ({ style, ...props }) => {
  const thubmStyle = { ...style, backgroundColor: colors.primaryPeach };
  return <div style={thubmStyle} {...props} />;
};

// main component
export const Booth = ({ booth }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => dispatch(setPrice(booth.price)), [booth.price]);

  const handleOption = (id) => {
    const options = [...state.options];
    const optionPrice = booth.options.find((opt) => opt.id === id).price;
    const total = state.price;

    if (options.includes(id)) {
      const updTotal = +total - optionPrice;
      dispatch(setOptions(options.filter((opt) => opt !== id)));
      dispatch(setPrice(updTotal));
      return;
    }

    if (!options.includes(id)) {
      const updTotal = +total + optionPrice;
      dispatch(setOptions([...options, id]));
      dispatch(setPrice(updTotal));
    }
  };

  const handleRent = (rent) => {
    if (state.rent === rent) {
      return dispatch(setRent(null));
    }

    dispatch(setRent(rent));
  };

  return (
    <BoothStyled>
      <div className="carousel">
        <Carousel showStatus={false} showThumbs={false} autoPlay={false}>
          {booth.photos.map((photo, i) => (
            <img src={photo} alt="" key={i} />
          ))}
        </Carousel>
      </div>

      <div className="info">
        <h3 className="info_title">{booth.title}</h3>

        <div className="info_size">
          <span className="info_size-title">Размер: </span>
          <span className="info_size-size">{booth.size}</span>
        </div>
      </div>

      <div className="options">
        <h4 className="options_title">Доп. опции</h4>

        <Scrollbars
          autoHide={true}
          style={{ height: 152 }}
          renderThumbVertical={optionsThumb}
        >
          {booth.options.map((option) => (
            <OptionStyled
              key={option.id}
              selected={state.options.includes(option.id)}
              onClick={() => handleOption(option.id)}
            >
              <img className="photo" src={option.photo} alt={option.title} />

              <div className="body">
                <h4 className="body_title">{option.title}</h4>

                <div className="body_price font_roboto">{`от ${option.price} ₽`}</div>
              </div>

              <div className="select">{icons.check}</div>
            </OptionStyled>
          ))}
        </Scrollbars>
      </div>

      <div className="rent">
        <h4 className="rent_title">Укажите время аренды</h4>

        <div className="rent_options">
          {booth.rent.map((opt) => (
            <RentOptionStyled
              key={opt}
              onClick={() => handleRent(opt)}
              selected={state.rent === opt}
            >
              {opt}
            </RentOptionStyled>
          ))}
        </div>
      </div>

      <div className="cta">
        <div className="cta_price font_roboto">{state.price} ₽</div>

        <PrimaryButton title="Оставить заявку" />
      </div>
    </BoothStyled>
  );
};
