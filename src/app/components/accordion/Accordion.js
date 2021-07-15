import { useRef } from "react";
import styled from "styled-components";

const AccordionStyled = styled.div`
  max-height: ${({ height }) => height}px;
  overflow: hidden;
  transition: ${({ speed }) => speed}s ease-in-out;
`;

export const Accordion = ({ open, openSpeed, minHeight, children }) => {
  const ref = useRef();
  return (
    <AccordionStyled
      ref={ref}
      height={open ? ref.current.scrollHeight : minHeight}
      open={open}
      speed={openSpeed}
    >
      {children}
    </AccordionStyled>
  );
};
