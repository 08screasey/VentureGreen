import { AnimatePresence, MotionConfig } from 'framer-motion';
import { cloneElement } from 'react';
import { RouterProvider, createBrowserRouter, useLocation, useRoutes } from 'react-router-dom';

import { Layout } from './Layout/Layout';
import { About } from './Routes/About/About';
import { Development } from './Routes/Development/Development';
import { Home } from './Routes/Home/Home';
import { Photography } from './Routes/Photography/Photography';

const BaseApp = () => {
    const { pathname } = useLocation();

    const route = useRoutes([
        { path: '/photography/*', element: <Photography /> },
        { path: '/development', element: <Development /> },
        { path: '/about', element: <About /> },
        { path: '*', element: <Home /> },
    ]);

    if (!route) {
        return null;
    }

    return (
        <MotionConfig reducedMotion="user">
            <Layout>
                <AnimatePresence mode="wait">{cloneElement(route, { key: pathname })}</AnimatePresence>
            </Layout>
        </MotionConfig>
    );
};

const router = createBrowserRouter([{ path: '*', element: <BaseApp /> }]);

export const AppWithRouter = () => <RouterProvider router={router} />;
