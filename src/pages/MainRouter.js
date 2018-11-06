import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./login/login";
import App from "../App";
import ResetPassword from "./reset-password/reset-password";
import ConfirmPassword from "./confirm-password/confirm-password";
import Profile from "./profile/profile";
const MainRouter = () => (
  <main>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/login" component={Login} />
      <Route path="/reset-password" component={ResetPassword} />
      <Route path="/confirm-password" component={ConfirmPassword} />
      <Route path="/profile" component={Profile} />
    </Switch>
  </main>
);

export default MainRouter;
