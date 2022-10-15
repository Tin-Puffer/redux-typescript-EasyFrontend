import * as React from 'react';
import  {Navigate ,RouteProps,Route} from 'react-router-dom'

export function PrivateRoute ({ children }:any) {
  const islogin = localStorage.getItem('islogin');
  if (!islogin) {
    return <Navigate to='/01s'/>
  }
  return children;
}

