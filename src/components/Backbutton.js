import React from 'react';
import arrow from "../resources/img/arrow.png";
import '../style/App.css';
import '../style/userpage.css';
import {Link} from "react-router-dom";

const Backbutton = () => {
    return (
        <div className="container">
            <div className="span">
                <Link to="/menu">
                    <a ><img src={arrow} width="50" height="42" alt="Пример"/>
                        <p className="backbutton">Вернуться к меню </p>
                    </a>
                </Link>
            </div>
        </div>
    );
};

export default Backbutton;
