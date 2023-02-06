import React from "react";
import photo from "./Img/yo.png";
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
                    <a href="https://www.linkedin.com/in/yeimmi-buenaventura/"><img src={lin}  alt="linkedln" className="imgs"/></a>
                    <a href="https://github.com/YeimmiBuenaventura"><img src={git} alt="github" className="imgs"/></a>
                    <img src={gmail} alt="gmail" className="imgs"/>
                    <a href=" https://wa.me/573052064524"><img src={wa} alt="whatsapp" className="imgs"/></a>
                </div>
            </section>
            <span className="text">“Sueña, crea y desarrolla... <br/>No existe el limite.”</span>
            <img src={photo} alt="me"  className="me"/>
        </section>
    )
}