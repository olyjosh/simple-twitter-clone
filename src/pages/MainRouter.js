import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./login/login";
import App from "../App";
import ResetPassword from "./reset-password/reset-password";
import ConfirmPassword from "./confirm-password/confirm-password";
const MainRouter = () => (
  <main>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/login" component={Login} />
      <Route path="/reset-password" component={ResetPassword} />
      <Route path="/confirm-password" component={ConfirmPassword} />
    </Switch>
  </main>
);

export default MainRouter;
