import React from 'react'
// import Form from "./Forms/EmployeeForm"
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import ProjectsList from "./Projects/ProjectsList";
import ProjectsEdit from "./Projects/ProjectsEdit";
import ProjectsAdd from "./Projects/ProjectsAdd";
// import Table from "./Table"
import "../index";


function Employees({ onAdd, showAdd }) {
    return (
        <Router>
            <div className="container">
                {/* <Form title='Project Manager' /> */}
                <nav className="navbar navbar-expand-lg navbar-light bg-light">

                    <div className="collpase navbar-collapse">
                        <ul className="navbar-nav mr-auto">
                            <li className="navbar-item">
                                <Link to="/" className="nav-link">Projects</Link>
                            </li>
                            <li className="navbar-item">
                                <Link to="/create" className="nav-link">Create New Projects</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <Route path="/" exact component={ProjectsList} />
                <Route path="/edit/:id" component={ProjectsEdit} />
                <Route path="/create" component={ProjectsAdd} />
            </div>

        </Router>
    );
}

export default Employees
