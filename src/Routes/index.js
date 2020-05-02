import { Switch } from "react-router-dom";
import React, { useState } from "react";
import Route from "./Route";
import Main from "../pages/Main";
import Dashboard from "../pages/Dashboard";
import Watches from "../pages/Watches/index";
import UpdateWatch from "../pages/Watches/upate";
import Signin from "../components/Signin/index";
import Signup from "../components/Signup/index";

export default function Routes({ inventory }) {
  return (
    <Switch>
      <Route path="/" exact component={Signin} />
      <Route path="/signup" exact component={Signup} />
      <Route path="/main" exact component={Main} isPrivate />
      <Route path="/createWatch" component={Watches} isPrivate />
      <Route path="/watch/:id" component={UpdateWatch} isPrivate />
      <Route
        path="/watches"
        inventory={inventory}
        component={Dashboard}
        isPrivate
      />
    </Switch>
  );
}
