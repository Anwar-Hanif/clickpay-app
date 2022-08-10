import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const [details, setDetails] = useState({ username: "", password: ""});
   
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();

        let username = details.username
        let password = details.password

        const basicToken = "Y2FsY2VydHM6dG9wc2VjcmV0";
        const apiUrl = 'http://192.168.100.14:8080/oauth/token';

        axios.post(apiUrl, {},
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Basic ${basicToken}`,
                    "Accept": 'application/json'
                },
                params: {
                    grant_type: "password",
                    username: username,
                    password: password

                }
            }
        ).then(function (response) {
            const myToken = response.data.access_token;
            localStorage.setItem('accessToken', `bearer ${myToken}`);
            console.log(myToken);
            navigate('/Layout');
        })
    }
    return (
        <div className="login_wrapper">
            <div className="login_top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 offset-lg-4">
                            <div className="login_form">
                                <img src="assets/images/logo.png" alt='' />
                                <p>Please Enter Username and Password to login.</p>
                                <form onSubmit={submitHandler}>
                                    <div className="mb-3">
                                        <input type="text" value={details.username} onChange={e => setDetails({ ...details, username: e.target.value })} className="form-control" placeholder="Username" name="" />
                                    </div>
                                    <div className="mb-3">
                                        <input type="password" autoComplete="off" value={details.password} onChange={e => setDetails({ ...details, password: e.target.value })} className="form-control" placeholder="Password" name="" />
                                    </div>
                                    <div className="mb-3">
                                        <button className="btn" type="submit">Login</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="login_bot">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="login_bleft">
                                <p>&copy; Copyright 2022 ClickPay. All Right Reserved.</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="login_bright">
                                <img src="assets/images/axxemo-logo.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login;