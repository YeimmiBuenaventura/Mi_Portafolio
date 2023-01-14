import React from "react";
import "./Home.scss";
import logo from "./Img/LogoPersonalColor.png"
import { Navbar } from "../Navbar/Navbar";
import { Contact } from "../Contact/Contact";

export const Home = () =>{

return(
    <section className="home">
        <h1> Yeimmi <br/> Buenaventura</h1>
        <img src={logo} alt="LogoPersonal" className="logo"/>
        <div className="nav">
            <Navbar/>
        </div>
        <div className="contact">
            <Contact/>
        </div>
    </section>
    );
}