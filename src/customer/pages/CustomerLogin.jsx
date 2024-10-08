import React, { useState } from 'react';
import '../css/pages/Customerlogin.css';
import { Link } from 'react-router-dom';
import Nav from '../../home/components/Nav';
import Contact from '../../home/components/Contact';
import toast from 'react-hot-toast';
import axios from 'axios';
import { backend } from '../../App';
import { signInFailed, signInStart, signInSuccess } from '../../redux/user/userSlicer.js';
import {useDispatch} from 'react-redux'

function CustomerLogin() {
    const [activeTab, setActiveTab] = useState('register'); // Track the active tab
    const [registerFormData, setRegisterFormData] = useState({
        name: '',
        email: '',
        phone: '',
        password: ''
    });
    const [loginFormData , setLoginFormData] = useState({
        email: '',
        password: ''
    });
   
    const dispatch = useDispatch()

    const registerChangeHandler = (e) => {
        setRegisterFormData({
            ...registerFormData,
            [e.target.name]: e.target.value
        });
    };

    const registerSubmitHandler = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post(`${backend}/api/v1/user/register`, registerFormData, {
                withCredentials: true,
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            // console.log(res)
            toast.success(res.data.message);
            setRegisterFormData({
                name: '',
                email: '',
                phone: '',
                password: ''
            });
            // toast.success('Registered successfully!');
        } catch (error) {
            // console.log(error);
            toast.error(error.response?.data?.message || 'Something went wrong');
        }
    };

    const loginChangeHandler = (e) => {
        setLoginFormData({
            ...loginFormData,
            [e.target.name]: e.target.value
        });
    };

    const loginSubmitHandler = async (e) => {
        e.preventDefault();

        dispatch(signInStart());

        try {
            const response = await axios.post('http://localhost:4000/api/v1/user/login', loginFormData, {
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
            <Nav />
            <section id='customer-login'>
                <div className='customer-login_img'>
                    <img src="https://demo.vflyorions.in/builder/img/loginimg.png" alt="Login" />
                </div>

                <div className='customer-login_content'>
                    <div>
                        {/* Buttons to switch between tabs */}
                        <button onClick={() => setActiveTab('register')} className={`login-switch_btn ${activeTab === 'register' ? 'active' : ''}`}>
                            Signup
                        </button>
                        <button onClick={() => setActiveTab('login')} className={`login-switch_btn ${activeTab === 'login' ? 'active' : ''}`}>
                            Login
                        </button>
                        <button onClick={() => setActiveTab('forgotpass')} className={`login-switch_btn ${activeTab === 'forgotpass' ? 'active' : ''}`}>
                            Forget Pass
                        </button>
                    </div>

                    {/* Content based on active tab */}
                    {activeTab === 'register' &&
                        <div className='customer-rejister_login_forgotpass_btn'>
                            <h5>Create your account</h5>
                            <form onSubmit={registerSubmitHandler}>
                                {/* <label htmlFor="">Sponsor ID :</label>
                                <input type="text" required />
                                <br /> */}
                                <label htmlFor="">Full Name :</label>
                                <input type="text" name='name' required onChange={registerChangeHandler} />
                                <div>
                                    <div>
                                        <label htmlFor="">Email Address :</label>
                                        <input type="email" name='email' required onChange={registerChangeHandler} />
                                    </div>
                                    <div>
                                        <label htmlFor="">Phone Number :</label>
                                        <input type="number" name='phone' required onChange={registerChangeHandler} />
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <label htmlFor="">Set Password :</label>
                                        <input type="password" name='password' required onChange={registerChangeHandler} />
                                    </div>
                                    {/* <div>
                                        <label htmlFor="">Role Type :</label>
                                        <input type="number" required />
                                    </div> */}
                                </div>
                                <div>
                                    {/* <div>
                                        <label htmlFor="">Adhar Number :</label>
                                        <input type="email" required />
                                    </div> */}
                                    {/* <div>
                                        <label htmlFor="">Pan Number :</label>
                                        <input type="number" required />
                                    </div> */}
                                </div>
                                <br />
                                <button className="home-hero1_btn"> Register  </button>
                            </form>
                        </div>
                    }

                    {activeTab === 'login' &&
                        <div className='customer-rejister_login_forgotpass_btn'>
                            <h5>Sign into your account</h5>
                            <form onSubmit={loginSubmitHandler} >
                                <label >E-mail :</label>
                                <input type="email" required placeholder='Enter your E-mail' name='email' onChange={loginChangeHandler} />
                                <br />
                                <label >Password :</label>
                                <input type="password" required placeholder='Enter Your Password' name='password' onChange={loginChangeHandler} />
                                <br />
                                <button className="home-hero1_btn"> Login  </button>
                            </form>
                        </div>
                    }

                    {activeTab === 'forgotpass' &&
                        <div className='customer-rejister_login_forgotpass_btn'>
                            <h5>Forgot your password</h5>
                            <form>
                                <label htmlFor="">Registered E-Mail Id :</label>
                                <input type="password" required />
                            <button className="home-hero1_btn"> Send OTP  </button>
                            </form>
                        </div>
                    }
                </div>
            </section>
            <Contact />
        </>
    );
}

export default CustomerLogin;
