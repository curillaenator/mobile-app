import { Carousel } from "react-responsive-carousel";
import styled from "styled-components";

import photo from "../../../assets/images/photo.jpg";

const BoothStyled = styled.div`
  padding: 16px 16px 18px 16px;
`;

export const Booth = () => {
  return (
    <BoothStyled>
      <Carousel>
        <div>
          <img src={photo} alt="" />
        </div>
        <div>
          <img src={photo} alt="" />
        </div>
      </Carousel>
    </BoothStyled>
  );
};
