import React from "react";
import {BrowserRouter, Switch, Route } from "react-router-dom";

import Main from "./pages/Main"
import NotFound from "./pages/NotFound";
import Contato from "./pages/Contato";

function Routes(){
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/resultado" component={Contato} />
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;