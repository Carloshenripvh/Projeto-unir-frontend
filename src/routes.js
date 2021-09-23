import React from "react";
import {BrowserRouter, Switch, Route } from "react-router-dom";

import Main from "./pages/Main"
import NotFound from "./pages/NotFound";
import Down from "./pages/Download";

function Routes(){
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/resultado" component={Down} />
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;