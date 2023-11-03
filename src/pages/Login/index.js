import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../Store/UserSlice';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import './login.scss';
import { FaceBookIcon, GogleIcon, TwitterIcon } from '~/components/Icons';
import { Button } from 'antd';
import config from '~/config';

export default function Login() {
    // state
    const [user, setUsers] = useState([]);

    const [identifier, setIdentifier] = useState('');
    const [password, setPassword] = useState('');

    // useEffect(() => {
    //     axios
    //         .get(`http://localhost:1337/api/users`)
    //         .then((res) => {
    //             console.log(res);
    //             setUsers(res.data.users);
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         });
    // }, []);

    //redux state
    const { loading, error } = useSelector((state) => state.user);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLoginEvent = (e) => {
        e.preventDefault();
        let userCredentials = {
            identifier,
            password,
        };
        dispatch(loginUser(userCredentials)).then((result) => {
            console.log(result, 'result');
            if (result.payload) {
                setIdentifier('');
                setPassword('');
                navigate('/');
                navigate(0);
            }
        });
    };

    return (
        <>
            <div className="container">
                <div className="YNXBARRSQR">
                    <form
                        className="form-group custom-form"
                        style={{ fontSize: 16 }}
                        onSubmit={handleLoginEvent}
                        id="delayedForm"
                    >
                        <input
                            placeholder="Email"
                            type="email"
                            required
                            className="form-control"
                            value={identifier}
                            onChange={(e) => setIdentifier(e.target.value)}
                        />
                        <br />
                        <input
                            placeholder="Password"
                            type="password"
                            required
                            className="form-control"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <br />
                        <div className="SZRSAADWVE">
                            <Link to={config.routes.register} className="PRTLMBKQDE">
                                <Button primary className="PMPCBQHDTY">
                                    Register
                                </Button>
                            </Link>
                            <button
                                type="submit"
                                className="btn btn-success btn-md"
                                style={{ fontSize: 16 }}
                                id="submitButton"
                            >
                                {loading ? 'Loading...' : 'Login'}
                            </button>
                        </div>

                        <div className="EIEJXSTYKA">
                            <button type="submit" className="IBEMCIUQLG">
                                Sử dụng mã QR
                            </button>
                            <button type="submit" className="IBEMCIUQLG">
                                <FaceBookIcon className="HLACWBMQBL" /> Tiếp tục với Facebook
                            </button>
                            <button type="submit" className="IBEMCIUQLG">
                                <GogleIcon className="HLACWBMQBL" /> Tiếp tục với Google
                            </button>
                            <button type="submit" className="IBEMCIUQLG">
                                <TwitterIcon className="HLACWBMQBL" /> Tiếp tục với Twitter
                            </button>
                        </div>

                        {error && (
                            <div className="alert alert-danger" role="alert">
                                {error}
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </>
    );
}
