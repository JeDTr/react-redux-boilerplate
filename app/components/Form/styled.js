import styled from "styled-components";

export const Feedback = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme, type }) =>
    type === "valid" ? theme.colors.green1 : theme.colors.red1};
`;

export const Label = styled.label`
  display: inline-block;
  margin-bottom: 8px;
  font-size: ${({ theme }) => theme.fontSizes.small};
`;

export const Group = styled.div`
  margin-bottom: 14px;
`;
