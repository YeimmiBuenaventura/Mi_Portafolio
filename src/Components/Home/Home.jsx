import React from "react";
import "./Home.scss";
import logo from "./Img/LogoPersonalBlanco.png"
import { Navbar } from "../Navbar/Navbar";
import { Contact } from "../Contact/Contact";
import LazyLoad from "react-lazy-load";

export const Home = () =>{

return(
    <section className="home">
        <h1> Yeimmi <br/> Buenaventura</h1>
        <LazyLoad>
            <img src={logo} alt="LogoPersonal" className="logo"/>
        </LazyLoad>
        <div className="nav">
            <Navbar/>
        </div>
        <div className="contact">
            <Contact/>
        </div>
    </section>
    );
}