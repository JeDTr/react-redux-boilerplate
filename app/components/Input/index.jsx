import { forwardRef } from "react";

import * as S from "./styled";

const Input = ({ onChange, ...rest }, ref) => {
  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return <S.Input onChange={handleChange} {...rest} ref={ref} />;
};

export default forwardRef(Input);
