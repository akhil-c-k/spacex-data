import React from 'react'
import { Redirect, Route } from 'react-router-dom'

const PrivateRoute = ({ loggedIn, component: Component, ...rest }) => {

  // Add your own authentication on the below line.
  var test = true;

  //true


  return (
    <Route
      {...rest}
      render={props =>
        test ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/', state: { from: props.location } }} />
        )
      }
    />
  )
}

export default PrivateRoute
