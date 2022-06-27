import React from "react";

import HeaderLinks from "@Molecules/HeaderLinks";
import HeaderLogo from "@Molecules/HeaderLogo";
import * as S from "./styled";

const Header = () => {
  return (
    <S.Header>
      <HeaderLogo />
      <HeaderLinks />
    </S.Header>
  );
};

export default Header;
