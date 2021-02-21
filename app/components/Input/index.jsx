import React from "react";

import * as S from "./styled";

const Input = (props, ref) => <S.Input {...props} ref={ref} />;

export default React.forwardRef(Input);
