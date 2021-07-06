import { Switch, Route } from "react-router-dom";
import styled from "styled-components";

import { Main } from "./pages/Main";
import { Order } from "./pages/Order";

const AppStyled = styled.div`
  min-width: 320px;
  max-width: 375px;
  margin: 0 auto;
  overflow: hidden;
`;

export const App = () => {
  return (
    <AppStyled>
      <Switch>
        <Route exact path="/" render={() => <Main />} />
        <Route path="/order" render={() => <Order />} />
      </Switch>
    </AppStyled>
  );
};
