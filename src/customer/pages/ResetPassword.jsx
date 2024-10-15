import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { backend } from '../../App'; // Adjust this path as needed

function ResetPassword() {
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [otpVisible, setOtpVisible] = useState(false);
    const [step, setStep] = useState(1); // 1: Request OTP, 2: Verify OTP, 3: Reset Password

    const requestOtp = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${backend}/api/v1/user/request-forget-password`, { email });
            toast.success(response.data.message);
            setStep(2);
        } catch (error) {
            toast.error(error.response?.data?.message || 'Error requesting OTP');
        }
    };

    const verifyOtp = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${backend}/api/v1/user/verify-reset-otp`, { email, otp });
            toast.success(response.data.message);
            setStep(3);
        } catch (error) {
            toast.error(error.response?.data?.message || 'Invalid OTP');
        }
    };

    const resetPassword = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${backend}/api/v1/user/reset-password`, { email, newPassword });
            toast.success(response.data.message);
            // Redirect to login or another page after successful reset
        } catch (error) {
            toast.error(error.response?.data?.message || 'Error resetting password');
        }
    };

    return (
        <div className="reset-password">
            <h2>Reset Password</h2>
            {step === 1 && (
                <form onSubmit={requestOtp}>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <button type="submit">Send OTP</button>
                </form>
            )}

            {step === 2 && (
                <form onSubmit={verifyOtp}>
                    <label>Enter OTP:</label>
                    <input
                        type="text"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                        required
                    />
                    <button type="submit">Verify OTP</button>
                </form>
            )}

            {step === 3 && (
                <form onSubmit={resetPassword}>
                    <label>New Password:</label>
                    <input
                        type={otpVisible ? "text" : "password"}
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        required
                    />
                    <i className={`far ${otpVisible ? 'fa-eye-slash' : 'fa-eye'}`} onClick={() => setOtpVisible(!otpVisible)}></i>
                    <button type="submit">Reset Password</button>
                </form>
            )}
        </div>
    );
}

export default ResetPassword;
