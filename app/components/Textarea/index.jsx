import React from "react";

import * as S from "./styled";

const Textarea = (props, ref) => <S.Textarea {...props} ref={ref} />;

export default React.forwardRef(Textarea);
