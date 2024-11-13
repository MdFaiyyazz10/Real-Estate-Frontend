import React, { useState } from 'react';
import Nav from '../../home/components/Nav';
import Contact from '../../home/components/Contact';
import '../css/pages/ResetPassword.css';
import { useDispatch, useSelector } from 'react-redux';
import { backend } from '../../App';
import toast from 'react-hot-toast';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function ResetPassword() {
    const [showPassword1, setShowPassword1] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);

    const navigate = useNavigate()
    const dispatch = useDispatch();

    const userId = useSelector((state) => state.user.userId);
    console.log(userId);

    const [resetPasswordFormData, setResetPasswordFormData] = useState({
        newPassword: '',
        confirmPassword: ''
    });

    const resetPasswordChangeHandler = (e) => {
        setResetPasswordFormData({
            ...resetPasswordFormData,
            [e.target.id]: e.target.value
        });
    };

    // console.log(resetPasswordFormData)

    const resetPasswordSubmitHandler = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${backend}/api/v1/password/reset-password`, {
                userId,
                newPassword: resetPasswordFormData.newPassword,
                confirmPassword: resetPasswordFormData.confirmPassword
            });
            // console.log(response)

            // Show success toast
            toast.success(response.data.message);

            navigate('/user/login')

        } catch (error) {
            // Show error toast
            toast.error(error.response?.data?.message || "An error occurred");
            console.log(error);
        }
    };

    const togglePassword1 = () => {
        setShowPassword1(!showPassword1);
    };

    const togglePassword2 = () => {
        setShowPassword2(!showPassword2);
    };

    return (
        <>
            {/* <Nav /> */}

            <section id="reset-pass_sec">
                <form onSubmit={resetPasswordSubmitHandler}>
                    <h3>Reset Your Password</h3>
                    <div className="reset-pass_input_cont">
                        <label htmlFor="newPassword">Enter Password:</label>
                        <input
                            type={showPassword1 ? 'text' : 'password'}
                            id='newPassword'
                            required
                            onChange={resetPasswordChangeHandler}
                        />
                        <span onClick={togglePassword1} className="reset-pass_toggle">
                            <i className={`fa-solid ${showPassword1 ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                        </span>
                    </div>
                    <div className="reset-pass_input_cont">
                        <label htmlFor="confirmPassword">Confirm Password:</label>
                        <input
                            type={showPassword2 ? 'text' : 'password'}
                            id='confirmPassword'
                            required
                            onChange={resetPasswordChangeHandler}
                        />
                        <span onClick={togglePassword2} className="reset-pass_toggle">
                            <i className={`fa-solid ${showPassword2 ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                        </span>
                    </div>
                    <button id="reset-pass_sec-btn">
                        <span className="hover-underline-animation"> Reset Now </span>
                        <i className="fa-solid fa-arrow-right"></i>
                    </button>
                </form>
            </section>

            {/* <Contact /> */}
        </>
    );
}

export default ResetPassword;
