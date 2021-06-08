import React from "react";

import * as S from "./styled";

const Textarea = ({ onChange, ...rest }, ref) => {
  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return <S.Textarea onChange={handleChange} {...rest} ref={ref} />;
};

export default React.forwardRef(Textarea);
