import React, { useState, useEffect } from 'react';
import { AiOutlineMail, AiOutlineLock, AiOutlineEye, AiOutlineEyeInvisible, AiOutlineUser } from 'react-icons/ai';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import './SignUp.css';

const SignUp = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [passwordsMatch, setPasswordsMatch] = useState(true);
    const navigate = useNavigate();
    const location = useLocation();

    const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001/api';

    const handleSignUp = async (e) => {
        e.preventDefault();
        console.log('Sign Up button clicked');
        if (password !== confirmPassword) {
            setPasswordsMatch(false);
            alert('Passwords do not match');
            return;
        }

        try {
            const response = await axios.post(`${API_URL}/register`, {
                firstName,
                lastName,
                email,
                password,
                confirmPassword,
            });
            console.log('Response:', response);
            alert(response.data.message);
        } catch (error) {
            console.error('Error:', error);
            alert(error.response.data.message || 'An error occurred');
        }
    };

    useEffect(() => {
        if (location.state && location.state.fullscreen) {
            document.body.classList.add('fullscreen');
        } else {
            document.body.classList.remove('fullscreen');
        }
    }, [location.state]);

    return (
        <div className="signup-container">
            <div className="screen-2">
                <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="Logo" className="logo" />
                <form onSubmit={handleSignUp}>
                    <div className="first-name-section">
                        <label htmlFor="firstName">First Name</label>
                        <div className="sec-2">
                            <AiOutlineUser className="icon" />
                            <input
                                type="text"
                                name="firstName"
                                placeholder="First Name"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    <div className="last-name-section">
                        <label htmlFor="lastName">Last Name</label>
                        <div className="sec-2">
                            <AiOutlineUser className="icon" />
                            <input
                                type="text"
                                name="lastName"
                                placeholder="Last Name"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    <div className="email-section">
                        <label htmlFor="email">Email Address</label>
                        <div className="sec-2">
                            <AiOutlineMail className="icon" />
                            <input
                                type="email"
                                name="email"
                                placeholder="Username@gmail.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    <div className="password-section">
                        <label htmlFor="password">Password</label>
                        <div className="sec-2">
                            <AiOutlineLock className="icon" />
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                placeholder="············"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            {showPassword ? (
                                <AiOutlineEyeInvisible className="show-hide" onClick={() => setShowPassword(!showPassword)} />
                            ) : (
                                <AiOutlineEye className="show-hide" onClick={() => setShowPassword(!showPassword)} />
                            )}
                        </div>
                    </div>
                    <div className="confirm-password-section">
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <div className="sec-2">
                            <AiOutlineLock className="icon" />
                            <input
                                type={showConfirmPassword ? "text" : "password"}
                                name="confirmPassword"
                                placeholder="············"
                                value={confirmPassword}
                                onChange={(e) => {
                                    setConfirmPassword(e.target.value);
                                    setPasswordsMatch(e.target.value === password);
                                }}
                                required
                            />
                            {showConfirmPassword ? (
                                <AiOutlineEyeInvisible className="show-hide" onClick={() => setShowConfirmPassword(!showConfirmPassword)} />
                            ) : (
                                <AiOutlineEye className="show-hide" onClick={() => setShowConfirmPassword(!showConfirmPassword)} />
                            )}
                        </div>
                    </div>
                    <button type="submit" className="login">Sign Up</button>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
