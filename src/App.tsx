import { Column } from "./Column";
import {
  AppContainer,
  CardContainer,
  ColumContainer,
  ColumnTitle,
} from "./styles";

export const App = () => {
  return (
    <AppContainer>
      <Column text="Todo:" />
    </AppContainer>
  );
};
