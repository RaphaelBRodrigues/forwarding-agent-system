import React from "react";
import BannerImage from "@Assets/images/banner.jpg";
import BannerContent from "@Molecules/BannerContent";

import * as S from "./styled";

const Header = () => {
  return (
    <S.BannerWrapper>
      <S.BannerBackground>
        <img src={BannerImage} alt="" />
        <div></div>
      </S.BannerBackground>
      <BannerContent />
    </S.BannerWrapper>
  );
};

export default Header;
