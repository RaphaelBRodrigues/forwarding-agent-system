import Link from "@Atoms/Link";
import React from "react";
import * as S from "./styled";
import Text from "@Atoms/Text";
import Button from "@Atoms/Button";

const BannerContent = () => {
  const handleClick = () => {};

  return (
    <S.BannerContentWrapper>
      <Text>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium
        quaerat sapiente dolore. Eum nihil a id cum cumque earum omnis,
        consequatur fugiat, ab, natus vitae! Cum officia ea quod eius.
      </Text>
      <Button onClick={handleClick}>Entre em contato</Button>
    </S.BannerContentWrapper>
  );
};

export default BannerContent;
