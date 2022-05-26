import React from "react";
import './App.css';

export default function Footer(){
    return(
        <footer>
            <a target={"_blank"} rel="noreferrer" className="btnlink" href="http://www.facebook.com/Izanagi.Sushi.ap/"><i className="fa-brands fa-facebook"></i>Siguenos</a>
            <a href={"tel:+5217775103119"} className="btnlink"><i className="fa-solid fa-phone"></i>Llamanos</a>
        </footer>
    )
}