import {
  AppContainer,
  CardContainer,
  ColumContainer,
  ColumnTitle,
} from "./styles";

export const App = () => {
  return (
    <AppContainer>
      <ColumContainer>
        <ColumnTitle>Todo :</ColumnTitle>
        <CardContainer>First Item</CardContainer>
        <CardContainer>Second Item</CardContainer>
      </ColumContainer>
    </AppContainer>
  );
};
