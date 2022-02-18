import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';
import "./style.css";

const EmpForm = () => {
    return (
        <div className="container">
            <h4>Welcome Employee!</h4>
            <h2>Please Select Your Option from the menu.</h2>
            <br />
            <div className="form-group">
                <label className="form-label">To Request Reimbursement</label>
                <Link className="btn btn-outline-primary" to="/addTicket">Request</Link>
            </div>
            <br />
            <div className="form-group">
                <label className="form-label">To View Past Tickets and Pending Requests</label>
                <Link className="btn btn-outline-primary" to="/viewTicket">View Tickets</Link>
            </div>
            <br />
            <div className="d-grid gap-2 col-3 mx-auto">
                <Link className="btn btn-outline-secondary text-center" to="/">Logout</Link>

            </div>
        </div>
    )
}
export default EmpForm;