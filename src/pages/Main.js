import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./login/login";
import App from "../App";
import ResetPassword from "./reset-password/reset-password";
const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/login" component={Login} />
      <Route path="/reset-password" component={ResetPassword} />
    </Switch>
  </main>
);

export default Main;
