import React from 'react'
import { Route } from 'react-router-dom';

/*  react-router's Route component doesnt pass its props down to the rendered   
    component by default, so we need to create a component that wraps a Route
    then renders the route with the props passed to the component
*/
export default function PropPassingRoute({component: Component, ...rest}) {
    return (
      <Route 
        {...rest}
        render={routerProps => (
          <Component {...Object.assign({}, rest, routerProps)}/>
        )}
      />
    )
  }