import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import LoginComponent from './LoginComponent';
import SignUp from './SignUp';
import PageTransition from './PageTransition';

function App() {
    return (
        <Router>
            <Routes>
                <Route element={<PageTransition />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<LoginComponent />} />
                    <Route path="/signup" element={<SignUp />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
