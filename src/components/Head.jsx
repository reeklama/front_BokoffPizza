import React, {useContext} from 'react';
import logo from "../resources/img/logo.png";
import userCab from "../resources/img/user.svg";
import {AuthContext} from "../context";
import {Link} from "react-router-dom";


const Head = (props) => {

    const {isAuth, setIsAuth} = useContext(AuthContext)

    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem('auth')
        localStorage.setItem('auth', false)
        localStorage.removeItem('email')
    }


    return (

        <header className="userpage-fonheader">
            <div className="container">
                <Link to="/menu">
                    <img src={logo} width="75" height="75" alt="Пример"/>
                </Link>

                <h1 className="userpage-header">BOKOFF PIZZA</h1>
                {isAuth ?
                    <div className="container3">
                        <div>
                            <h1>{localStorage.getItem('email')}</h1>
                            <button className="button_header" onClick={logout}>Выйти</button>
                        </div>
                        <Link to="/lc" className="userpage-link">
                            <img src={userCab} width="65" height="65" alt=""/>
                        </Link>
                    </div>
                    :
                    <div className="container2">
                        <Link className="button_header" to="/login">Войти</Link>
                        <Link className="button_header" to="/registration">Зарегистрироваться</Link>
                    </div>
                }
            </div>
        </header>
    );
};

export default Head;