import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Assuming you'll create some styles for this component

const Home = () => {
    return (
        <div className="home-container">
            <header className="home-header">
                <h1>Welcome to Quizzy!</h1>
                <Link to="/login" className="sign-in-link">Sign In</Link>
            </header>
            <main>
                <p>Your ultimate quiz platform.</p>
            </main>
        </div>
    );
};

export default Home;
