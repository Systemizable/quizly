import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './Login';
import SignUp from './SignUp';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
            </Routes>
        </div>
    );
}

export default App;
