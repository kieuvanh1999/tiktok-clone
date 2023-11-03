import React, { useEffect, useState } from 'react';
import './style.scss';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../Store/UserSlice';
import { useNavigate } from 'react-router-dom';

export default function Register() {
    // state
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    //redux state
    const { loadings, errors } = useSelector((state) => state.user);

    const dispatchs = useDispatch();
    const navigates = useNavigate();

    const handleRegisterUser = (e) => {
        e.preventDefault();
        let userRegister = {
            username,
            password,
            email,
        };
        dispatchs(registerUser(userRegister)).then((result) => {
            console.log(result, 'result');
            if (result.payload) {
                setUserName('');
                setPassword('');
                setEmail('');
                navigates('/Login');
            }
        });
    };

    return (
        <>
            <div className="container">
                <div className="YNXBARRSQR">
                    <form className="form-group custom-form" style={{ fontSize: 16 }} onSubmit={handleRegisterUser}>
                        <label for="">User Name</label>
                        <input
                            type="name"
                            required
                            className="form-control"
                            value={username}
                            onChange={(e) => setUserName(e.target.value)}
                        />
                        <label for="">Email</label>
                        <input
                            type="email"
                            required
                            className="form-control"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <br />
                        <label for="">Password</label>
                        <input
                            type="password"
                            required
                            className="form-control"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        <br />
                        <button
                            type="submit"
                            className="btn btn-success btn-md"
                            style={{ fontSize: 16 }}
                            id="submitButton"
                        >
                            {loadings ? 'Loading...' : 'Register'}
                        </button>
                        {errors && (
                            <div className="alert alert-danger" role="alert">
                                {errors}
                            </div>
                        )}
                    </form>
                    <br />
                </div>
            </div>
        </>
    );
}
