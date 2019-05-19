import React from 'react';
import {Route, Redirect} from 'react-router-dom';
// import adminAuth from './AdminAuth';

// export const ProtectedRoute = ({component: Component, ...rest}) => {
//   return (
//     <Route 
//       {...rest} 
//       render = {(props) => {
//         if(adminAuth.isAdminAuthenticated()) {
//           return <Component {...props} />;
//         }
//         else {
//           return <Redirect to={
//             {
//               pathname: "/adminlogin",
//               state: {
//                 from: props.location
//               }
//             }
//           }/>
//         } 
//       }}
//     />
//   );
// };

export const ProtectedAdminRoute = ({
  component: Component, 
  ...rest
}) => {
  const isAuth = localStorage.getItem('isAdminLoggedIn');
  return (
    <Route
      {...rest}
      render={props => isAuth === 'true' ? (
        <Component {...props} {...rest} />
      ) : (
        <Redirect to={{
          pathname: '/adminlogin',
          state: {
            from: props.location
          }
        }}
        />
      )}
    />
  );
};