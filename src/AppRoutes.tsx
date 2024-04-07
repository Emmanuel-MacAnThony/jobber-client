import { FC } from 'react';
import { useRoutes, RouteObject } from 'react-router-dom';
import AppPage from './features/AppPage';

const AppRouter: FC = () => {
  const routes: RouteObject[] = [
    {
      path: '/',
      element: <AppPage />
    }
  ];

  return useRoutes(routes);
};

export default AppRouter;
