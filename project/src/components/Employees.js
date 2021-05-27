import React from 'react'
// import Form from "./Forms/EmployeeForm"
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import AddEmployees from "./EmployeeFolder/Employees-add";
import EmployeesList from "./EmployeeFolder/Employees-list";
import EditEmployees from "./EmployeeFolder/Employees-edit";
// import Table from "./Table"
import "../index";


function Employees({ onAdd, showAdd })  {
    return (
     <Router>
         <div className="container">
                {/* <Form title='Project Manager' /> */}
<nav className="navbar navbar-expand-lg navbar-light bg-light">
               
                    <div className="collpase navbar-collapse">
                        <ul className="navbar-nav mr-auto">
                            <li className="navbar-item">
                                <Link to="/" className="nav-link">Employees</Link>
                            </li>
                            <li className="navbar-item">
                                <Link to="/create" className="nav-link">Add Employees</Link>
                            </li>
                        </ul>
                    </div>
    </nav>
                <Route path="/" exact component={EmployeesList} />
                <Route path="/edit/:id" component={EditEmployees} />
                <Route path="/create" component={AddEmployees} />
                </div> 

        </Router>
    );
}

export default Employees
