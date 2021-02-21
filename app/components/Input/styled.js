import styled from "styled-components";

export const Input = styled.input`
  display: block;
  width: 100%;
  padding: 0 14px;
  border-radius: 6px;
  border: 1px solid #eee;
  background-color: #fff;
  height: 32px;

  &::placeholder {
    color: #bababa;
  }

  &:disabled {
    color: #b0b7c3;
    background-color: #f4f4f4;
  }

  &:focus {
    border-color: #6ab9e7;
  }
`;
