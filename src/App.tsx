import { Routes, Route, BrowserRouter } from "react-router-dom";

import Photography from "./containers/Photography/Photography";
import Development from "./containers/Development/Development";
import Layout from "./containers/Layout/Layout";
import Home from "./containers/Home/Home";
import About from "./components/About/About";
import { Contact } from "./containers/Contact/Contact";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

export const App = () => (
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/photography" Component={Photography} />
        <Route path="/development" Component={Development} />
        <Route path="/about-me" Component={About} />
        <Route path="/contact" Component={Contact} />
        <Route path="/" Component={Home} />
      </Routes>
    </Layout>
  </BrowserRouter>
);
