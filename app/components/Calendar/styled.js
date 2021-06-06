import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  height: 185px;
  border-radius: 8px;
  box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 0.3);
  background-color: #fff;
`;

export const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 7px 16px;
`;

export const NavButton = styled.button.attrs(() => ({
  type: "button",
}))`
  padding: 0;
  border: 0;
  outline: 0;
  background-color: transparent;
  font-size: 12px;
  color: #ccc;
  white-space: nowrap;
  cursor: pointer;

  &:disabled {
    cursor: default;
  }
`;

export const MonthYear = styled.span`
  font-weight: 700;
  color: #000;
`;

export const WeekDayContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 16px;
  background-color: #fff;
`;

export const WeekDay = styled.div`
  flex-basis: calc(100% / 7);
  height: 23px;
  line-height: 23px;
  text-align: center;
  font-size: 12px;
`;

export const DayContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 1;
  padding: 0 16px;
`;

export const DayCell = styled.div`
  flex-basis: calc(100% / 7);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DayCellInner = styled.button.attrs({
  type: "button",
})`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  border-radius: 99px;
  padding: 0;
  font-size: 12px;
  white-space: nowrap;
  cursor: pointer;

  ${({ isSelected }) =>
    isSelected &&
    css`
      background-color: #006eff;
    `}

  ${({ variant }) => {
    switch (variant) {
      case "past":
        return css`
          color: #000;
        `;
      case "present":
        return css`
          background-color: #0099ff;
          color: #fff;
        `;
      case "future":
      default:
        return css`
          color: #000;
        `;
    }
  }}
`;
