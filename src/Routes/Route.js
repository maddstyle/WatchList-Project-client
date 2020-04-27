import React, { useState, useEffect } from "react";
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
      return null;
    }
  });

  useEffect(() => {
    setSigned(signed);
  }, [signed]);

  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }
  // if (signed && !isPrivate) {
  //   return <Redirect to="/watches" />;
  // }
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
