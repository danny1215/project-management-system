import Rseact, { Component } from 'react';


export default class AddEmployees extends Component {
    constructor(props) {
        super(props);
        this.onChangeemployeefirstName = this.onChangeemployeefirstName.bind(this);
        this.onChangeemployeelasttName = this.onChangeemployeelasttName.bind(this);
        this.onChangeemployeeEmail = this.onChangeemployeeEmail.bind(this);
        this.onChangeemployeeRole = this.onChangeemployeeRole.bind(this);
        
        this.state= {
            employee_firstName:"",
            employee_lasttName: "",
            employee_Role: "",
            employee_Email: "",
        }
    }
    onChangeemployeefirstName(e) {
        this.setState({
            employee_firstName:e.target.value
        });
    }
        onChangeemployeelasttName(e) {
            this.setState({
                employee_lasttName: e.target.value
            });
        }
            onChangeemployeeRole(e) {
                this.setState({
                    employee_Role: e.target.value
                });
            }
                onChangeemployeeEmail(e) {
                    this.setState({
                        employee_Email: e.target.value
                    });
               
    }
    onSubmit(e) {
    e.prevenDefault();
    this.setState({
        employee_firstName: "",
        employee_lasttName: "",
        employee_Role: "",
        employee_Email: "",
    })
    }
    render() {
        return (

            <div style={{marginTop:20}}>
               <h3> Add New Employee</h3>
               <form onSubmit={this.onSubmit}>
<div className="form-group">
<label>First Name</label>
<input type="text"
className = "form-control"
value = {this.state.employee_firstName}
onChange={this.onChangeemployeefirstName}
/>
</div>
                    <div className="form-group">
                        <label>Last Name</label>
                        <input type="text"
                            className="form-control"
                            value={this.state.employee_lasttName}
                            onChange={this.onChangeemployeelastName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="text"
                            className="form-control"
                            value={this.state.employee_Email}
                            onChange={this.onChangeemployeeEmail}
                        />
                    </div>
                    <div className="form-group">
<div className="form-check form-check-inLine" >
    
<input className="form-check-input"
type="radio"
name="employeeRole"
id= "RoleManager"
value = "Manager"
checked = {this.state.employee_Role==="Manager"}
onChange = {this.onChangeemployeeRole}
/>
<label className="form-check-label">Manager</label>
</div>
                        <div className="form-check form-check-inLine">
                            <input className="form-check-input"
                                type="radio"
                                name="employeeRole"
                                id="RoleMDeveloper"
                                value="Developer"
                                checked={this.state.employee_Role === "Developer"}
                                onChange={this.onChangeemployeeRole}
                            />
                            <label className="form-check-label">Developer</label>
                        </div>


                        </div>


<div className="form-group">
                        <input type="submit" value="Add Employee" className="btn btn-primary"/>


</div>
               </form>
            </div>
        )
    }

}