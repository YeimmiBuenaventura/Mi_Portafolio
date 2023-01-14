import React from "react";
import photo from "./Img/yo.png";
import face from "./Img/facebook.png";
import gmail from "./Img/gmail.png";
import lin from "./Img/linkedin.png";
import git from "./Img/github.png";
import wa from "./Img/whatsapp.png";
import "./Contact.scss"


export const Contact = () =>{

    return(
        <section className="contact">
            <section className="info">
                <h2>Contactame</h2>
                <div className="redes">
                    <img src={lin}  alt="linkedln" className="imgs"/>
                    <img src={git} alt="github" className="imgs"/>
                    <img src={gmail} alt="gmail" className="imgs"/>
                    <img src={face} alt="facebook" className="imgs"/>
                    <img src={wa} alt="whatsapp" className="imgs"/>
                </div>
            </section>
            <span className="text">“Sueña, crea y desarrolla... <br/>No existe el limite.”</span>
            <img src={photo} alt="me"  className="me"/>
        </section>
    )
}