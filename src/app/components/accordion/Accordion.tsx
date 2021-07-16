import { useRef } from "react";
import type { FC, RefObject, ReactNode } from "react";
import styled from "styled-components";

interface IAccordionStyled {
  ref: RefObject<HTMLDivElement>;
  height: number;
  open: boolean;
  speed: number;
}

const AccordionStyled = styled.div<IAccordionStyled>`
  max-height: ${({ height }) => height}px;
  overflow: hidden;
  transition: ${({ speed }) => speed}s ease-in-out;
`;

interface IAccordion {
  open: boolean;
  openSpeed: number;
  minHeight: number;
  children: ReactNode;
}

export const Accordion: FC<IAccordion> = ({
  open,
  openSpeed,
  minHeight,
  children,
}) => {
  const ref = useRef(null);

  return (
    <AccordionStyled
      ref={ref}
      // @ts-ignore
      height={open ? ref.current.scrollHeight : minHeight}
      open={open}
      speed={openSpeed}
    >
      {children}
    </AccordionStyled>
  );
};
