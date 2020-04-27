import React, { useState } from "react";
import { Route, Redirect } from "react-router-dom";
import AuthLayout from "../components/_layouts/Auth/index";

export default function RouteWrapper({
  component: Component,
  isPrivate = false,
  ...rest
}) {
  const [signed, setSigned] = useState(() => {
    const storedToken = localStorage.getItem("watchstore");
    if (storedToken) {
      return JSON.parse(storedToken);
    } else {
      return [];
    }
  });

  const auth = signed ? true : false;

  if (!auth && isPrivate) {
    return <Redirect to="/" />;
  }

  if (auth && !isPrivate) {
    return <Redirect to="/watches" />;
  }

  return (
    <Route
      {...rest}
      render={props => (
        <AuthLayout>
          <Component {...props} {...rest} />
        </AuthLayout>
      )}
    />
  );
}
