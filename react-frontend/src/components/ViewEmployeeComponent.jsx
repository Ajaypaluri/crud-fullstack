// import React, { Component } from 'react'
// import EmployeeService from '../services/EmployeeService'


// class ViewEmployeeComponent extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             id: this.props.match.params.id,
//             employee: {}
//         }
//     }

//     componentDidMount(){
//         EmployeeService.getEmployeeById(this.state.id).then( res => {
//             this.setState({employee: res.data});
//         })
//     }

//     render() {
//         return (
//             <div>
//                 <br></br>
//                 <div className = "card col-md-6 offset-md-3">
//                     <h3 className = "text-center"> View Employee Details</h3>
//                     <div className = "card-body">
//                         <div className = "row">
//                             <label> Employee First Name: </label>
//                             <div> { this.state.employee.firstName }</div>
//                         </div>
//                         <div className = "row">
//                             <label> Employee Last Name: </label>
//                             <div> { this.state.employee.lastName }</div>
//                         </div>
//                         <div className = "row">
//                             <label> Employee Email ID: </label>
//                             <div> { this.state.employee.emailId }</div>
//                         </div>
//                     </div>

//                 </div>
//             </div>
//         )
//     }
// }

// export default ViewEmployeeComponent

import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';
import { withRouter } from './withRouter';

class ViewEmployeeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employee: {},
        };
    }

    componentDidMount() {
        const { id } = this.props.params; // Access route params
        EmployeeService.getEmployeeById(id).then((res) => {
            this.setState({ employee: res.data });
        });
    }

    render() {
        const { employee } = this.state;
        return (
            <div>
                <div className="card col-md-6 offset-md-3">
                    <h3 className="text-center">View Employee Details</h3>
                    <div className="card-body">
                        <div className="row">
                            <label> First Name: </label>
                            <div> {employee.firstName} </div>
                        </div>
                        <div className="row">
                            <label> Last Name: </label>
                            <div> {employee.lastName} </div>
                        </div>
                        <div className="row">
                            <label> Email Address: </label>
                            <div> {employee.emailId} </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(ViewEmployeeComponent);