import React from "react";
import * as S from "./styled";

interface LinkProps {
  href: string;
  children: React.ReactNode;
}

const Link: React.FC<LinkProps> = ({ href, children }) => {
  return (
    <S.Link>
      <a href={href}>{children}</a>
    </S.Link>
  );
};

export default Link;
