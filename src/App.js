import React from 'react';
import Photography from './containers/Photography/Photography';
import Development from './containers/Development/Development';
import Layout from './containers/Layout/Layout';
import Home from './containers/Home/Home';
import About from "./components/About/About";
import {Switch, Route, BrowserRouter} from 'react-router-dom'; 
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
   return(<BrowserRouter>
     <Layout>
     <Switch>
     <Route path="/photography" component={Photography}/>
     <Route path="/development" component={Development}/>
     <Route path="/about-me" component={About}/>
      <Route path="/" exact component={Home}/>
      </Switch>
   </Layout>
   </BrowserRouter>)
}

export default App;
