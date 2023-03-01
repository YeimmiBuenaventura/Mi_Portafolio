import React, { useState } from "react";
import photo from "./Img/yo.png";
import gmail from "./Img/gmail.png";
import lin from "./Img/linkedin.png";
import git from "./Img/github.png";
import wa from "./Img/whatsapp.png";
import cv from "./Img/cv.png";
import close from "./Img/equis.png";
import curriculum from "./Img/Curriculum.pdf"
import "./Contact.scss"


export const Contact = () =>{
    const [email, openEmail] = useState(false);

    const handChange = () =>{
        openEmail(true)
    }
    const handClose = () =>{
        openEmail(false)
    }

    return(
        <section className="contact">
            <div className="redes">
                <a href="https://www.linkedin.com/in/yeimmi-buenaventura/" title="LinkedIn"><img src={lin}  alt="linkedln" className="imgs"/></a>
                <a href="https://github.com/YeimmiBuenaventura" title="Github"><img src={git} alt="github" className="imgs"/></a>
                <button className="gm" onClick={handChange} title="Correo Electrónico"><img src={gmail} alt="gmail" className="imgs"/></button>
                {email ? (
                    <section className="target">
                        <button className="closes" onClick={handClose}><img src={close} alt="close" className="close"/></button>
                        <div className="inf">
                            <h3>Email</h3>
                            <p>yeimmipaola@gmail.com</p>
                        </div>
                    </section>
                ): null}
                <a href=" https://wa.me/573052064524" title="WhatsApp"><img src={wa} alt="whatsapp" className="imgs"/></a>
                <a href={curriculum} download="CurriculumYeimmiBuenaventura" title="Descarga Mi Curriculum"><img src={cv} alt="curriculum" className="imgs"/></a>
            </div>
            <span className="text">“Sueña, crea y desarrolla... <br/>No existe el limite.”</span>
            <img src={photo} alt="me"  className="me"/>
        </section>
    )
}