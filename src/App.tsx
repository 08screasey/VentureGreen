import { AnimatePresence, MotionConfig } from 'framer-motion';
import { cloneElement } from 'react';
import { useLocation, useRoutes } from 'react-router-dom';

import { Layout } from './Layout/Layout';
import { About } from './Pages/About/About';
import { Development } from './Pages/Development/Development';
import { Home } from './Pages/Home/Home';
import { Photography } from './Pages/Photography/Photography';

export const App = () => {
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
