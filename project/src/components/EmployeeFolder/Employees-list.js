import React, {Component} from 'react';
import { Link } from 'react-router-dom';

// import {link} from "react-router-dom";
import axios from "axios";

const Employee = props => (
    <tr>
        <td>{props.employee.First_name}</td>
        <td>{props.employee.Last_name}</td>
        <td>{props.employee.Email}</td>
        <td>{props.employee.Role}</td>
        <td>
            {/* <link to= {} ></link> */}
        </td>

    </tr>
)

export default class EmployeesList extends Component {
constructor(props) { 
    super(props);
    this.state = {employees: []};
}
componentDidMount(){
    axios.get("http://localhost:3001/api/employee")
    .then(response => {
        this.setState({employees: response.data});

    })
    .catch(function (error) {
       console.log(error);
    })
}
employeeList() {
    return this.state.employees.map (function(currentEmployee,i) {
        return <Employee employee = {currentEmployee} key ={i}/>;
    });
}
    render() {
        return (

            <div>
                <h2> Welcome To Your Employees List now</h2>
                <table className= "table table-striped" style = {{marginTop: 20 }} > 
                <thead>

<tr>
    <th>First Name</th>
    <th>Last Name</th>
    <th>Email</th>
  <th>Role</th>
</tr>
    </thead>
    <tbody>
        {this.employeeList() }
    </tbody>
                
                
                
                
                </table>
            </div>    
                )
    }

}