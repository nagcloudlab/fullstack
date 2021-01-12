import React from 'react';
import { useForm } from "react-hook-form";

import * as api from '../../api/index'
import { useDispatch, useSelector } from 'react-redux'

const Login = ({ history, location }) => {
    const { register, handleSubmit, watch, errors } = useForm();
    const dispatch = useDispatch()
    const user = useSelector(state => state.user)


    if (user.currentUser) {
        history.push("/items")
    }

    const onSubmit = data => {
        let action = api.auth(data)
        dispatch(action)
    }
    return (
        <div>
            <div className="row">
                <div className="col-6">
                    <div className="card">
                        <div className="card-header">Login</div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-group">
                                    <label>Username/Email</label>
                                    <input className="form-control" name="email" ref={register({ required: true })} />
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password" className="form-control" name="password" ref={register({ required: true })} />
                                </div>
                                <button className="btn btn-dark">sign-in</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;