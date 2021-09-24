import { useState } from "react";
import { NavLink, useRouteMatch } from "react-router-dom";

import { ITEMS } from "./constants";
import * as S from "./styled";

const ItemLink = ({ label, url }) => (
  <S.Item as={NavLink} to={url} exact>
    {label}
  </S.Item>
);

const ItemCollapse = ({ label, url, childs }) => {
  const match = useRouteMatch(url);
  const [collapse, setCollapse] = useState(!!match);

  return (
    <>
      <S.Item onClick={() => setCollapse(!collapse)}>{label}</S.Item>
      {collapse && (
        <ul>
          {childs.map((child) => (
            <li key={child.url}>
              <S.Item as={NavLink} to={`${url}${child.url}`} exact $isChild>
                {child.label}
              </S.Item>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

const Sidebar = () => (
  <S.Sidebar>
    <ul>
      {ITEMS.map((item) => (
        <li key={item.url}>
          {item.childs ? <ItemCollapse {...item} /> : <ItemLink {...item} />}
        </li>
      ))}
    </ul>
  </S.Sidebar>
);

export default Sidebar;
