import React from "react";
import "./Home.scss";
import logo from "./Img/LogoPersonalColor.png"
import { Navbar } from "../Navbar/Navbar";

export const Home = () =>{

return(
    <section className="home">
        <h1> Yeimmi <br/> Buenaventura</h1>
        <img src={logo} alt="LogoPersonal" className="logo"/>
        <div className="contact">

        </div>
        <div className="nav">
        <Navbar/>
        </div>

    </section>
    );
}