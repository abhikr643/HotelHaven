import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import Jumbotron from "./Jumbotron";

function Main(){
    return(
        <div>
        <div className="background1">
        <Navbar/>
        <Header/>
        </div>
        <Jumbotron/>
        </div>
    )
}

export default Main;