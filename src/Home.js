import React from 'react';
import './Home.css';


const Home = () => {
    return (
        <div className="home-container">


            <div id="navBar">
                <ul id="navUl">
                    <li id="navLi"><a href="#">Home</a></li>
                    <li id="navLi" className="navHl"><a href="#">|</a></li>
                    <li id="navLi"><a href="#">About Us</a></li>
                    <li id="navLi" className="navHl"><a href="#">|</a></li>
                    <li id="navLi"><a href="#">Leaderboards</a></li>
                    <li id="navLi" className="navHl"><a href="#">|</a></li>
                    <li id="navLi"><a href="#">Friends</a></li>
                    <li id="navLi" className="navHl"><a href="#">|</a></li>
                    <li id="navLi"><a href="#">Sign In</a></li>
                </ul>
            </div>

            <div id="scene">
                <h1 id="welcome">WELCOME to Quizly</h1>
                <div id="star1"></div>
                <div id="star2"></div>
                <div id="star3"></div>
                <div id="star4"></div>
                <div id="star5"></div>
                <div id="star6"></div>
                <div id="star7"></div>
                <div id="star8"></div>
                <div id="star9"></div>
                <div id="star10"></div>
                <div id="star11"></div>
            </div>
        </div>
    );
};

export default Home;
