//import { useSelector } from "react-redux";
import React from "react";
import { mine } from "./util/Mine";
import "./Project.scss"
import git from "../Contact/Img/github.png"
import des from "../Contact/Img/enlace.png"

export const MyProjects = () => {

    const propios = mine.filter(item => item.type === "myprojects");

    return (
        <section className="allpro">
            {propios.map((item) => (
                <section key={item.id} className="cartProject animates">
                    <h1 className="tit">
                        {item.title}
                    </h1>
                    <figure>
                        <img src={`../Img/${item.img}`} alt="imagen" className="img" />
                    </figure>
                    <span className="tec">
                        {item.tec}
                    </span>
                    <div className="oks">
                        <button className="git">
                            <a href={item.github}><img src={git} alt="github" className="icon" /></a>
                        </button>
                        <button className="des">
                            <a href={item.link}><img src={des} alt="despliegue" className="icon" /></a>
                        </button>
                    </div>
                </section>
            ))}
        </section>
    )
}