import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import Survey1 from "./survey/survey1";
import Survey2 from "./survey/survey2";
import Survey3 from "./survey/survey3";
import SignInForm from "./user/login/login";
import Register from "./user/register";


const App = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<SignInForm />} />
                <Route path="/register" element={<Register />} />
                <Route path="/survey1" element={<Survey1 />} />
                <Route path="/survey2" element={<Survey2 />} />
                <Route path="/survey3" element={<Survey3 />} />
                <Route path="*" element={<Navigate to="/" />} />

            </Routes>
        </div>
    );
}

export default App;
