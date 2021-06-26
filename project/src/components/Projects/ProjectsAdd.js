
import React, { Component } from 'react';
import axios from "axios";

export default class CreateTodo extends Component {

    constructor(props) {
        super(props);


        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeRole = this.onChangeRole.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            First_Name: "",
            Last_Name: '',
            Email: '',
            Role: false
        }
    }

    onChangeFirstName(e) {
        this.setState({
            First_Name: e.target.value
        });
    }

    onChangeLastName(e) {
        this.setState({
            Last_Name: e.target.value
        });
    }

    onChangeEmail(e) {
        this.setState({
            Email: e.target.value
        });
    }
    onChangeRole(e) {
        this.setState({
            Role: e.target.value
        });
    }
    onSubmit(e) {
        e.preventDefault();

        console.log(`Form submitted:`);
        console.log(`First Name: ${this.state.First_Name}`);
        console.log(`Last Name: ${this.state.Last_Name}`);
        console.log(`Email: ${this.state.Email}`);
        console.log(`Role: ${this.state.Role}`);
        const newTodo = {
            First_Name: this.state.First_Name,
            Last_Name: this.state.Last_Name,
            Email: this.state.Email,
            Rol: this.state.Role
        }

        axios.post('http://localhost:3001/api/employee', newTodo)
            .then(res => console.log(res.data));

        this.setState({
            First_Name: '',
            Last_Name: '',
            Email: '',
            Role: '',
        })
    }

    render() {
        return (
            <div style={{ marginTop: 20 }}>
                <h3> Add New Employee</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>First Name</label>
                        <input type="text"
                            className="form-control"
                            value={this.state.First_Name}
                            onChange={this.onChangeFirstName}
                        />
                    </div>

                    <div className="form-group">
                        <label>Last Name</label>
                        <input type="text"
                            className="form-control"
                            value={this.state.Last_Name}
                            onChange={this.onChangeLastName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="text"
                            className="form-control"
                            value={this.state.Email}
                            onChange={this.onChangeEmail}
                        />
                    </div>
                    <div className="form-group">
                        <div className="form-check form-check-inLine" >

                            <input className="form-check-input"
                                type="radio"
                                name="employeeRole"
                                id="RoleManager"
                                value="Manager"
                                checked={this.state.Role === "Manager"}
                                onChange={this.onChangeRole}
                            />
                            <label className="form-check-label">Manager</label>
                        </div>
                        <div className="form-check form-check-inLine">
                            <input className="form-check-input"
                                type="radio"
                                name="employeeRole"
                                id="RoleMDeveloper"
                                value="Developer"
                                checked={this.state.Role === "Developer"}
                                onChange={this.onChangeRole}
                            />
                            <label className="form-check-label">Developer</label>
                        </div>


                    </div>

                    <div className="form-group">
                        <input type="submit" value="Create Todo" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}