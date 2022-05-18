import React from 'react';
import arrow from "../resources/img/arrow.png";
import '../style/App.css';
import '../style/userpage.css';

const Backbutton = () => {
    return (
        <div className="container">
            <div className="span">
                <a href="sample.html"><img src={arrow} width="50" height="42" alt="Пример"/>
                    <p className="backbutton">Вернуться к меню </p>
                </a>
            </div>
        </div>
    );
};

export default Backbutton;
