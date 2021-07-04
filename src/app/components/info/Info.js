import styled from "styled-components";
import { colors } from "../../../utils/colors";

const InfoStyled = styled.section`
  width: 100%;
  padding: 0 16px;

  .info_title {
    margin-bottom: 20px;
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 53px;
  }

  .info_text {
    margin-bottom: 20px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.3;
  }

  .info_bullets {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

const BulletStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(50% - 8px);
  margin-bottom: 30px;

  .bullet_title {
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
  }

  & > svg {
    fill: ${colors.primaryPeach};
    margin-bottom: 4px;
  }
`;

export const Info = ({ content }) => {
  const { title, text, bullets } = content;

  return (
    <InfoStyled>
      <h1 className="info_title font_roboto">{title}</h1>

      <p className="info_text">{text}</p>

      <div className="info_bullets">
        {bullets.map((bullet, i) => (
          <BulletStyled key={i}>
            {bullet.icon}
            <h3 className="bullet_title">{bullet.title}</h3>
          </BulletStyled>
        ))}
      </div>
    </InfoStyled>
  );
};
