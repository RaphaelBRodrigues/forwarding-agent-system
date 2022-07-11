import React from "react";
import * as S from "./styled";

interface TextProps {
  children: React.ReactNode;
}

const Text: React.FC<TextProps> = ({ children }) => {
  return <S.Text>{children}</S.Text>;
};

export default Text;
