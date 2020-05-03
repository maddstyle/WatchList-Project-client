import React, { useState, useEffect } from 'react'
import { Route, Redirect } from 'react-router-dom'
import AuthLayout from '../components/_layouts/Auth/index'
import DefaultLayout from '../components/_layouts/Default/index'

export default function RouteWrapper({
  component: Component,
  isPrivate = false,
  ...rest
}) {
  const [signed, setSigned] = useState(() => {
    const storedToken = localStorage.getItem('watchstore')
    if (storedToken) {
      return JSON.parse(storedToken)
    } else {
      return null
    }
  })

  useEffect(() => {
    setSigned(signed)
  }, [signed])

  const validated = !!signed

  if (!validated && isPrivate) {
    return <Redirect to="/" />
  }

  if (validated && !isPrivate) {
    return <Redirect to="/watches" />
  }

  const Layout = validated ? DefaultLayout : AuthLayout

  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout>
          <Component {...props} {...rest} />
        </Layout>
      )}
    />
  )
}
