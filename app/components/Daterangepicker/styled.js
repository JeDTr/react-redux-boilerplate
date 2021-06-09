import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;

  input {
    padding-right: 30px;
  }

  svg {
    position: absolute;
    right: 4px;
    top: 50%;
    transform: translateY(-50%);
  }
`;

export const CalendarWrapper = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 10;
`;
