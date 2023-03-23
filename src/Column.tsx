import React from "react";
import { CardContainer, ColumContainer, ColumnTitle } from "./styles";

type ColumnProps = {
  text: string;
};

export const Column = ({ text }: ColumnProps) => {
  return (
    <ColumContainer>
      <ColumnTitle>{text}</ColumnTitle>
      <CardContainer>Generate app scaffold</CardContainer>
      <CardContainer>Learn TypeScript</CardContainer>
      <CardContainer>Being to static typing</CardContainer>
    </ColumContainer>
  );
};
