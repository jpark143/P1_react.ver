import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';
import "./style.css";

const AdminForm = () => {
    return (
        <div className="container">
            <h4>Welcome Admin!</h4>
            <h2>Please Select Your Option from the menu.</h2>
            <br />
            <div className="form-group">
                <label className="form-label">View All Reimbursement Requests and Past History</label>
                <Link className="btn btn-outline-primary" to="/viewAll">View</Link>
            </div>
            <br />
            <div className="form-group">
                <label className="form-label">Authorize to Approve and Deny Requests</label>
                <Link className="btn btn-outline-primary" to="/authorize">Authorize</Link>
            </div>
            <br />
            <div className="d-grid gap-2 col-3 mx-auto">
                <Link className="btn btn-outline-secondary text-center" to="/">Logout</Link>
            </div>
        </div>
    )
}
export default AdminForm;