import React from "react";
import Dashboard from "./components/Dashboard";
import Signin from "./components/SignForms/Signin";
import {BrowserRouter, Route, Routes , Switch } from "react-router-dom";
import Signup from "./components/SignForms/Signup";



function App(){
    return(
        <div>
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/login" element={<Signin/>}/>
        <Route path="/signup" element={<Signup/>}/>
        </Routes>
        </BrowserRouter>
        </div>
    )
}

export default App;
