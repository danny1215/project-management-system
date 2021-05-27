import React from 'react';
import "./App.css";

import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Employees from './components/Employees';


function App() {
    return ( 
        <Router>

                <Navbar />
                <Switch>
                <Route path='/Employee' exact component={Employees} />
                    </Switch>
  </Router>
  
    );
}

export default App;