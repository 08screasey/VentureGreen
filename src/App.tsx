import { RouterProvider, createBrowserRouter, useRoutes } from 'react-router-dom';

import { Photography } from './Routes/Photography/Photography';

const BaseApp = () => {
    const route = useRoutes([{ path: '/photography/*', element: <Photography /> }]);

    if (!route) {
        return null;
    }

    return route;
};

const router = createBrowserRouter([{ path: '*', element: <BaseApp /> }]);

export const AppWithRouter = () => <RouterProvider router={router} />;
