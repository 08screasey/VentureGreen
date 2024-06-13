import { Routes, Route } from 'react-router-dom';

import { About } from './components/About/About';
import { Contact } from './containers/Contact/Contact';
import { Development } from './containers/Development/Development';
import { Home } from './containers/Home/Home';
import { Layout } from './containers/Layout/Layout';
import { Photography } from './containers/Photography/Photography';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export const App = () => (
    <Layout>
        <Routes>
            <Route path="/photography" Component={Photography} />
            <Route path="/development" Component={Development} />
            <Route path="/about-me" Component={About} />
            <Route path="/contact" Component={Contact} />
            <Route path="*" Component={Home} />
        </Routes>
    </Layout>
);
