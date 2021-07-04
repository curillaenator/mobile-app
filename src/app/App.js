import { Switch, Route } from "react-router-dom";
import styled from "styled-components";

import { Main } from "./pages/Main";

const AppStyled = styled.div`
  min-width: 320px;
  max-width: 375px;
  margin: 0 auto;
`;

export const App = () => {
  return (
    <AppStyled>
      <Switch>
        <Route exact path="/" render={() => <Main />} />
      </Switch>
    </AppStyled>
  );
};
