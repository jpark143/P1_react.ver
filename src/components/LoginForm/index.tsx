import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { bindActionCreators } from "redux";
import * as Creators from "../../state/creators";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

const LoginForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {loginCreator} = bindActionCreators(Creators, dispatch);

    const [user, setUser] = useState({
        username: "",
        password: "",
        status: ""
    });

    function onChangeHandler(event:any) {
        setUser({
            ...user,
            [event.target.name]: event.target.value,
        });
    };

    function onSubmitHandler(e:any) {
        e.preventDefault();
        axios.get("http://localhost:9002/user/" + user.username)
            .then(response => {
                console.log(response.data);
                if (response.data === "") {
                    throw new Error("Invalid login");
                } else if (user.password !== response.data.password) {
                    throw new Error("Invalid password");
                }
                loginCreator({
                    ...response.data
                })
                navigate("/employee");
                // if(user.status === "employee"){
                //     navigate("/employee");
                // }
                // if(user.status === "manager"){
                //     navigate("/admin");
                // }else{

                // }
            })
            .catch(error => { console.error(error); })
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg">
                    <div className="wrapper">
                        <h1>Expense Reimbursement System</h1>
                        <p>Welcome!! Please login.</p>
                        <form onSubmit={onSubmitHandler}>
                            <div className="form-group">
                                <label className="form-label">Username:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="username"
                                    placeholder="Username"
                                    value={user.username}
                                    onChange={onChangeHandler}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Password:</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    name="password"
                                    placeholder="password"
                                    value={user.password}
                                    onChange={onChangeHandler}
                                    required
                                />
                            </div>
                            <br />
                            <div className="d-grid gap-2 col-6 mx-auto">
                                <button type="submit" className="btn btn-success">
                                    Log-in
                                </button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default LoginForm;
