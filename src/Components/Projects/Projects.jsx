import React from "react";
import { mine } from "./util/Mine";
import LazyLoad from "react-lazy-load";
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
                    <LazyLoad>
                        <figure>
                            <img src={`../Img/${item.img}`} alt="imagen" className="img" />
                        </figure>
                    </LazyLoad>
                    <span className="tec">
                        {item.tec}
                    </span>
                    <div className="oks">
                        <button className="git">
                            <a href={item.github} title="Git - Repositorio">
                            <LazyLoad>
                                <img src={git} alt="github" className="icon" />
                            </LazyLoad>    
                            </a>
                        </button>
                        <button className="des">
                            <a href={item.link} title="Despliegue - Página">
                            <LazyLoad>    
                                <img src={des} alt="despliegue" className="icon"/>
                            </LazyLoad>    
                            </a>
                        </button>
                    </div>
                </section>
            ))}
        </section>
    )
}