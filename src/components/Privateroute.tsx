import React from 'react';
import { Route, Navigate} from 'react-router-dom';
import AuthenticationService from '../services/authentication-service';

 const PrivateRoute: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const isAuthenticated = AuthenticationService.isAuthenticated;
 

  if (!isAuthenticated) {
    return <Navigate to={{ pathname: '/login' }} />
  }

  return children;
};
export default  PrivateRoute

// const PrivateRoute = ({ component: Component, ...rest }: any) => (
//   <Route {...rest} render={(props:any) => {
//     const isAuthenticated = AuthenticationService.isAuthenticated;
//     if (!isAuthenticated) {    
//       return <Navigate to={{ pathname: '/login' }} />
//     }
  
//     return <Component {...props} />
//   }} />
// );
  
// export default PrivateRoute;