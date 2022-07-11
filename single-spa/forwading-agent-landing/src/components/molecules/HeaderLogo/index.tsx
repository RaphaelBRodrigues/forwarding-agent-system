import Logo from "@Atoms/Logo";
import React from "react";
import * as S from "./styled";

const HeaderLogo = () => {
  return (
    <S.LogoWrapper>
      <Logo />
      {/* <h1>RDespachante</h1> */}
    </S.LogoWrapper>
  );
};

export default HeaderLogo;
