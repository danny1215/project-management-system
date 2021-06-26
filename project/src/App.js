import React from 'react';
import "./App.css";

import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Employees from './components/Employees';
import Projects from "./components/Projects";


function App() {
    return ( 
        <Router>

                <Navbar />
                <Switch>
                <Route path='/Employee' exact component={Employees} />
                <Route path='/Projects' exact component={Projects} />
                    </Switch>
  </Router>
  
    );
}

export default App;