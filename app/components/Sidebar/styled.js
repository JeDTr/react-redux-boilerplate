import styled, { css } from "styled-components";

export const Sidebar = styled.div`
  width: 240px;
  flex: 0 0 240px;
`;

export const Item = styled.button`
  display: flex;
  align-items: center;
  width: 100%;
  height: 40px;
  padding: 0 12px;
  border: 0;
  outline: 0;
  background-color: transparent;
  font: inherit;
  text-decoration: none;

  &:hover,
  &.active {
    background-color: #81ecec;
  }

  ${({ $isChild }) =>
    $isChild &&
    css`
      padding-left: 24px;
    `}
`;
