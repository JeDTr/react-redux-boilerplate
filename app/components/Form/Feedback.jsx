import * as S from "./styled";

// type: valid | invalid
const Feedback = ({ type = "invalid", ...rest }) => (
  <S.Feedback type={type} {...rest} />
);

export default Feedback;
