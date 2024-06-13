import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import { About } from './Components/About/About';
import { Layout } from './Components/Layout/Layout';
import { Contact } from './Pages/Contact/Contact';
import { Development } from './Pages/Development/Development';
import { Home } from './Pages/Home/Home';
import { Photography } from './Pages/Photography/Photography';

import 'bootstrap/dist/css/bootstrap.min.css';

export const App = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <Layout>
            <Routes>
                <Route path="/photography/*" Component={Photography} />
                <Route path="/development" Component={Development} />
                <Route path="/about-me" Component={About} />
                <Route path="/contact" Component={Contact} />
                <Route path="*" Component={Home} />
            </Routes>
        </Layout>
    );
};
