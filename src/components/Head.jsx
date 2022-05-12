import React from 'react';
import logo from "../resources/img/logo.png";
import userCab from "../resources/img/user.svg";

const Head = (props) => {

    return (
        <header className="userpage-fonheader">
            <div className="container">
                <a href="/">
                    <img src={logo} width="75" height="75" alt="Пример"/>
                </a>
                <h1 className="userpage-header">BOKOFF PIZZA</h1>
                    <div className="container2">
                        <a className="ccacacaca">user.name</a>
                        <a className="ccacacaca" href="/login">Войти</a>
                        <a className="ccacacaca" href="/registration">Зарегистрироваться</a>
                        <a className="ccacacaca" href="/logout">Выйти</a>
                    </div>

                    <a href="/" className="userpage-link">
                        <img src={userCab} width="65" height="65" alt=""/>
                    </a>
            </div>
        </header>
    );
};

export default Head;