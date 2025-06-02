import { Navigate, RouteObject } from 'react-router-dom';
import { ROUTES } from './routePaths';
import PrivateRoutes from './PrivateRoutes';
import PublicRoutes from './PublicRoutes';
import Home from '../pages/home/Home';
import Login from '../pages/login/Login';


const Routes: RouteObject[] = [
  {
    path: '*',
    element: <Navigate to={ROUTES.LOGIN} replace />,
  },
  {
    element: <PublicRoutes />,
    children: [
      {
        path: ROUTES.LOGIN,
        element: <Login />,
      }

    ],
  },
  {
    element: <PrivateRoutes />,
    children: [
      {
        path: ROUTES.HOME,
        element: <Home />,
      },
    ],
  },
];

export default Routes;
