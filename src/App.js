import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import HomePage from "./Pages/HomePage";
import SigninPage from "./Pages/SigninPage";
import SignupPage from "./Pages/SignupPage";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={SigninPage} path='/login' />
        <Route component={HomePage} path='/home' />
        <Route component={SignupPage} path='/' />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
