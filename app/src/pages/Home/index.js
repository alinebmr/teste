import React from "react";
import HeaderHome from "../../componentes/HeaderHome";
import "./styles.css"
import Lista from "../../componentes/imgs/lista.png"

export default function Home(){
    return (
        <div id="header">
            <HeaderHome/>
            <div id="homebox">
                <h1>Bem vindo ao <span>My ToDoList</span></h1>
                <p>Comece a criar suas próprias ToDoList!</p>
                <div id="image">
                    <img src={Lista}/>
                </div>
                
            </div>
        </div>
    );
};
