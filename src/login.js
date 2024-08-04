import React, { useState } from 'react';
import { AiOutlineMail, AiOutlineLock, AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001/api';

    const handleLogin = async (e) => {
        e.preventDefault();
        console.log('Login button clicked');
        try {
            const response = await axios.post(`${API_URL}/Login`, { email, password });
            console.log('Response:', response);
            alert(response.data.message);
            // Handle successful login (e.g., navigate to a different page or store user info)
        } catch (error) {
            console.error('Error:', error);
            alert(error.response.data.message);
        }
    };

    return (
        <div className="screen-1">
            <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="Logo" className="logo" />
            <form onSubmit={handleLogin}>
                <div className="email">
                    <label htmlFor="email">Email Address</label>
                    <div className="sec-2">
                        <AiOutlineMail className="icon" />
                        <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Username@gmail.com"
                            required
                        />
                    </div>
                </div>
                <div className="password">
                    <label htmlFor="password">Password</label>
                    <div className="sec-2">
                        <AiOutlineLock className="icon" />
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="············"
                            required
                        />
                        {showPassword ? (
                            <AiOutlineEyeInvisible className="show-hide" onClick={() => setShowPassword(!showPassword)} />
                        ) : (
                            <AiOutlineEye className="show-hide" onClick={() => setShowPassword(!showPassword)} />
                        )}
                    </div>
                </div>
                <button type="submit" className="login">Login</button>
            </form>
            <div className="footer">
                <span onClick={() => navigate('/signup')}>Sign up</span>
                <span>Forgot Password?</span>
            </div>
        </div>
    );
};

export default Login;