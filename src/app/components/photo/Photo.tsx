import { FC } from "react";
import styled from "styled-components";

interface IPhotoStyled {
  ratio: number;
}

const PhotoStyled = styled.div<IPhotoStyled>`
  position: relative;
  width: 100%;
  height: 0;
  padding-top: calc(100% * ${({ ratio }) => ratio});
  height: 0;
  user-select: none;

  & > img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

interface IPhoto {
  url: string;
  ratio: number;
}

export const Photo: FC<IPhoto> = ({ url, ratio }) => {
  return (
    <PhotoStyled ratio={ratio}>
      <img src={url} alt="NewsPhoto" draggable={false} />
    </PhotoStyled>
  );
};
