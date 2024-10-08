import React, { useState } from 'react'
import '../css/pages/Adminlogin.css'
import { signInFailed, signInStart, signInSuccess } from '../../redux/user/userSlicer';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast'
import axios from 'axios';


function Adminlogin() {

    const [formData , setFormData] = useState({})

    const dispatch = useDispatch()

    const loginChangeHandler = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    };

    const loginSubmitHandler = async (e) => {
        e.preventDefault();

        dispatch(signInStart());

        try {
            const response = await axios.post('http://localhost:4000/api/v1/admin/signin', formData, {
                withCredentials: true,
                headers: {
                    "Content-Type": "application/json"
                }
            });
            // console.log(response)
            toast.success(response.data.message);
            dispatch(signInSuccess({
                ...response.data.user, // Spread user data from response
                token: response.data.token, // Assuming this is returned from your API
            }));
        } catch (error) {
            console.log(error)
            toast.error(error.response?.data?.message || "An error occurred");
            dispatch(signInFailed(error));
        }
    };

    return (
        <>
        <section id='admin-login'>
            <div className="admin-login-container">
                <form className="admin-admin-login-form" onSubmit={loginSubmitHandler}>
                    <h3>Login</h3>
                    <div className="admin-input-box">
                        <input type="email" required id='email' onChange={loginChangeHandler} />
                            <label>Email</label>
                    </div>
                    <div className="admin-input-box">
                        <input type="password" required id='password' onChange={loginChangeHandler} />
                            <label>Password</label>
                    </div>
                    <button id='admin-login-btn' type="submit"> Login </button>
                </form>
            </div>
        </section>
        </>
    )
}

export default Adminlogin
