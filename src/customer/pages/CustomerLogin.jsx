import React, { useState, useEffect } from 'react';
import '../css/pages/Customerlogin.css';
import { Link } from 'react-router-dom';
import Nav from '../../home/components/Nav';
import Contact from '../../home/components/Contact';
import toast from 'react-hot-toast';
import axios from 'axios';
import { backend } from '../../App';
import { useDispatch } from 'react-redux';
import { setUserId, signInFailed, signInStart, signInSuccess } from '../../redux/user/userSlicer.js';
import { useNavigate } from 'react-router-dom';

// Timer Countdown
const CountdownTimer = ({ expiryTime, onExpire }) => {
    const [timeLeft, setTimeLeft] = useState(expiryTime);

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prevTime) => {
                if (prevTime > 0) {
                    return prevTime - 1000;
                } else {
                    clearInterval(timer);
                    // Call onExpire only when time is up
                    if (onExpire) {
                        onExpire(); // Trigger on expire
                    }
                    return 0;
                }
            });
        }, 1000);
    
        return () => clearInterval(timer);
    }, [onExpire]);
    

    const formatTime = (ms) => {
        const totalSeconds = Math.floor(ms / 1000);
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    return (
        <div className="countdown-timer">
            {timeLeft > 0 ? (
                <p>Time remaining: {formatTime(timeLeft)}</p>
            ) : (
                <p>OTP has expired!</p>
            )}
        </div>
    );
};

function CustomerLogin() {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [activeTab, setActiveTab] = useState('register');
    const [otpVisible, setOtpVisible] = useState(false);
    const [otpEmail, setOtpEmail] = useState('');
    const [otpInput, setOtpInput] = useState(Array(6).fill(''));
    const [otpExpiryTime, setOtpExpiryTime] = useState(0.10 * 60 * 1000); // 5 minutes
    const [otpExpired, setOtpExpired] = useState(false);

    const [registerFormData, setRegisterFormData] = useState({
        name: '',
        email: '',
        phone: '',
        password: ''
    });
    const [loginFormData, setLoginFormData] = useState({
        email: '',
        password: ''
    });

    const navigate = useNavigate()

    const dispatch = useDispatch();


    // Registration Handler
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
            toast.success(res.data.message);
            setRegisterFormData({
                name: '',
                email: '',
                phone: '',
                password: ''
            });
        } catch (error) {
            toast.error(error.response?.data?.message || 'Something went wrong');
        }
    };

    // Login Handler
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
            const response = await axios.post(`${backend}/api/v1/user/login`, loginFormData, {
                withCredentials: true,
                headers: {
                    "Content-Type": "application/json"
                }
            });
            toast.success(response.data.message);
            dispatch(signInSuccess({
                ...response.data.user,
                token: response.data.token,
            }));
        } catch (error) {
            toast.error(error.response?.data?.message || "An error occurred");
            dispatch(signInFailed(error));
        }
    };

    const handleInputChange = (index, e) => {
        const value = e.target.value;
    
        if (/^[0-9]?$/.test(value)) { // Allow only single digit numbers
            const newOtpInput = [...otpInput];
            newOtpInput[index] = value;
            setOtpInput(newOtpInput);
    
            // Automatically move to the next input
            if (value.length === 1 && index < otpInput.length - 1) {
                document.getElementById(`input${index + 2}`).focus();
            }
        } else {
            // Clear the input if not valid
            const newOtpInput = [...otpInput];
            newOtpInput[index] = '';
            setOtpInput(newOtpInput);
        }
    };
    

    // Forgot Password and OTP
    const handelSendOTP = async (e) => {
        e.preventDefault();
        if (registerFormData.email) {
            try {
                const response = await axios.post(`${backend}/api/v1/user/request-forget-password`, { email: registerFormData.email });
                console.log('OTP Sent:', response.data.message); // Check if OTP sent
                setOtpVisible(true);
                setOtpEmail(registerFormData.email);
                setOtpExpiryTime(.10 * 60 * 1000); // Reset timer
                setOtpExpired(false); // Reset expired status
                toast.success(response.data.message);
            } catch (error) {
                toast.error(error.response?.data?.message || 'Error sending OTP');
            }
        } else {
            toast.error("Please enter your email to receive OTP.");
        }
    };
    

  
    const verifyOtp = async (e) => {
        e.preventDefault();
        const otp = otpInput.join('');
        try {
            const response = await axios.post(`${backend}/api/v1/user/verify-reset-otp`, { email: otpEmail, otp });
            toast.success(response.data.message);

             // User ID ko Redux store mein set karne ke liye
            dispatch(setUserId(response.data.userId));
            navigate('/user/reset-password')
            // Proceed with password reset or other actions after successful verification
        } catch (error) {
            toast.error(error.response?.data?.message || 'Invalid OTP');
        }
    };

    //OTP expire
    const handleOtpExpire = () => {
        setOtpExpired(true);
    };

    //Resend OTP
    const handleResendOTP = async (e) => {
        e.preventDefault()
        if (!otpExpired) {
            toast.error("OTP is still valid, please wait for it to expire.");
            return;
        }

        try {
            // await handelSendOTP(e);
            const response = await axios.post(`${backend}/api/v1/user/resend-otp`, { email: registerFormData.email })
            setOtpEmail(registerFormData.email)
            setOtpExpired(0.10 * 60 * 1000)
            setOtpExpired(false)
            toast.success(response.data.message)
        } catch (error) {
            toast.error(error.response?.data?.message || 'Error resending OTP');
        }
    };

    const handleAadharInput = (e) => {
        const value = e.target.value;
        // Limit Aadhar number to 12 digits
        if (value.length > 12) {
            e.target.value = value.slice(0, 12);
        }
    };

    const handlePanInput = (e) => {
        const value = e.target.value;
        // Limit PAN number to 10 characters
        if (value.length > 10) {
            e.target.value = value.slice(0, 10);
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

                    {activeTab === 'register' && (
                        <div className='customer-rejister_login_forgotpass_btn'>
                            <h5>Create your account</h5>
                            <form onSubmit={registerSubmitHandler}>
                                <div>
                                    <label htmlFor="">Sponsor ID :</label>
                                    <input placeholder='Enter Sponsor ID:' type="text" required />
                                    <label htmlFor="">Full Name :</label>
                                    <input placeholder='Enter Full Name:' type="text" name='name' required onChange={registerChangeHandler} />
                                </div>
                                <div>
                                    <div>
                                        <label htmlFor="">Email Address :</label>
                                        <input placeholder='Enter E-Mail Id:' type="email" name='email' required onChange={registerChangeHandler} />
                                    </div>
                                    <div>
                                        <label htmlFor="">Phone Number :</label>
                                        <input maxLength={"10"} placeholder='Enter Phone No:' type="number" name='phone' required onChange={registerChangeHandler} />
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <label htmlFor="password">Set Password :</label>
                                        <div className="customer-pass_cont">
                                            <input maxLength={"8"} placeholder='Enter Password:' type={passwordVisible ? "text" : "password"} name='password' required onChange={registerChangeHandler} className="customer-pass_input" />
                                            <i className={`far ${passwordVisible ? 'fa-eye-slash' : 'fa-eye'} customer-toggle_pass`} onClick={() => setPasswordVisible(!passwordVisible)}></i>
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="">Role Type :</label>
                                        <br />
                                        <select name="" id="">
                                            <option value="Customer">Select Role</option>
                                            <option value="Customer">Customer</option>
                                            <option value="Agent">Agent</option>
                                        </select>
                                        {/* <input placeholder='Enter Role Type:' type="number" required /> */}
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <label htmlFor="aadhar">Aadhar Number :</label>
                                        <input
                                            id="aadhar"
                                            onInput={handleAadharInput}
                                            placeholder="Enter Aadhar Number:"
                                            type="number"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="pan">Pan Number :</label>
                                        <input
                                            id="pan"
                                            onInput={handlePanInput}
                                            placeholder="Enter Pan Number:"
                                            type="text" // Use type="text" for PAN
                                            required
                                        />
                                    </div>
                                </div>
                                <button className="home-hero1_btn"> Register </button>
                            </form>
                        </div>
                    )}

                    {activeTab === 'login' && (
                        <div className='customer-rejister_login_forgotpass_btn'>
                            <h5>Sign into your account</h5>
                            <form onSubmit={loginSubmitHandler}>
                                <div>
                                    <label>E-mail :</label>
                                    <input type="email" required placeholder='Enter E-Mail Id' name='email' onChange={loginChangeHandler} />
                                    <div>
                                        <label htmlFor="password">Set Password :</label>
                                        <div className="customer-pass_cont">
                                            <input maxLength={"8"} placeholder='Enter Password:' type={passwordVisible ? "text" : "password"} name='password' required onChange={loginChangeHandler} className="customer-pass_input" />
                                            <i className={`far ${passwordVisible ? 'fa-eye-slash' : 'fa-eye'} customer-toggle_pass`} onClick={() => setPasswordVisible(!passwordVisible)}></i>
                                        </div>
                                    </div>
                                </div>
                                <button className="home-hero1_btn"> Login </button>
                            </form>
                        </div>
                    )}

{activeTab === 'forgotpass' && (
    <div className='customer-rejister_login_forgotpass_btn'>
        <h5>Forgot your password</h5>
        <form onSubmit={otpVisible ? verifyOtp : handelSendOTP}>
            {!otpVisible ? (
                <>
                    <div>
                        <label htmlFor="">Registered E-Mail Id :</label>
                        <input
                            placeholder='Enter E-Mail Id:'
                            type="email"
                            required
                            value={registerFormData.email}
                            onChange={(e) => setRegisterFormData({ ...registerFormData, email: e.target.value })}
                        />
                    </div>
                    <button type="submit" className="home-hero1_btn">Send OTP</button>
                </>
            ) : (
                <div id='forgetpass_otp-sec'>
                    <p className="forgetpass_otp-message">
                        We have sent a verification code to your <br />
                        <span>{otpEmail}</span>
                    </p>
                    <div className="forgetpass_otp-inputs">
                        <input id="input1" type="text" maxLength="1" onChange={(e) => handleInputChange(0, e)} />
                        <input id="input2" type="text" maxLength="1" onChange={(e) => handleInputChange(1, e)} />
                        <input id="input3" type="text" maxLength="1" onChange={(e) => handleInputChange(2, e)} />
                        <input id="input4" type="text" maxLength="1" onChange={(e) => handleInputChange(3, e)} />
                        <input id="input5" type="text" maxLength="1" onChange={(e) => handleInputChange(4, e)} />
                        <input id="input6" type="text" maxLength="1" onChange={(e) => handleInputChange(5, e)} />
                    </div>
                    <CountdownTimer expiryTime={otpExpiryTime} onExpire={handleOtpExpire} />
                    <div>
                        <button className="home-hero1_btn">Verify OTP</button>
                        <button type="button" className="home-hero1_btn resend-btn" onClick={handleResendOTP} disabled={!otpExpired}>
                            Resend OTP
                        </button>
                        {otpExpired && <p className="otp-expire-message">OTP expired. Please request a new one.</p>}
                    </div>
                </div>
            )}
        </form>
    </div>
)}

                </div>
            </section>
            <Contact />
        </>
    );
}

export default CustomerLogin;
