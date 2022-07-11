import Link from "@Atoms/Link";
import React from "react";
import * as S from "./styled";

const HeaderLinks = () => {
  return (
    <S.LinksWrapper>
      <Link href="#">Home</Link>
      <Link href="#">Localização</Link>
      <Link href="#">Contato</Link>
    </S.LinksWrapper>
  );
};

export default HeaderLinks;
