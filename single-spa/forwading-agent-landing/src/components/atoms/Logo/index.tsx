import React from "react";
import * as S from "./styled";
import LogoImage from "@Assets/images/logo.png";

const Logo = () => {
  return (
    <S.LogoWrapper>
      <img src={LogoImage} alt="" />
    </S.LogoWrapper>
  );
};

export default Logo;
