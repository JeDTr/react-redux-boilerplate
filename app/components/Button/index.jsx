import * as S from "./styled";

const Button = ({ size = "small", extend, ...rest }) => (
  <S.Button size={size} extend={extend} {...rest} />
);

export default Button;
