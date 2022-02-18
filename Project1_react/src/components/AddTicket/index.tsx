import { useState } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import "./style.css";

const AddTicket = () => {
    
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [tickets, setTickets] = useState({
        amount: "",
        desc: "",
    });

    function onChangeHandler(event:any) {
        setTickets({
            ...tickets,
            [event.target.name]: event.target.value,
        });
    };

    return (
        <div>
            <div className="container-ticket">
                <div className="backBtn">
                    <Link className="btn btn-secondary" to="/employee">Back</Link>
                </div>
                <h2>Reimbursement Form</h2>
                <form>
                    <p>Enter Your Reimbursement Amount: </p>
                    <div className="input-group">
                        <span className="input-group-text">$</span>
                        <input type="text" className="form-control" name="amount" placeholder="00.00" value={tickets.amount} onChange={onChangeHandler} required />
                    </div>

                    <p>Enter the Reimbursement Description</p>
                    <div className="input-group">
                        <textarea className="form-control" name="desc" placeholder="Some Description..." value={tickets.desc} onChange={onChangeHandler} required />
                    </div>
                    <div className="reimbBtn">
                        <input type="submit" className="btn btn-outline-success" value="Submit" />
                    </div>
                </form>
            </div>
        </div>

    )
}

export default AddTicket;