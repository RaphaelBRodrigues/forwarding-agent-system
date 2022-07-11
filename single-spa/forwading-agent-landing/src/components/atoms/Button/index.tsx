import React from "react";
import * as S from "./styled";

interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
  return <S.Button onClick={onClick}>{children}</S.Button>;
};

export default Button;
