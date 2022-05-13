import React, {useState} from 'react';
import logo from "../resources/img/logo.png";
import {Link, useNavigate} from "react-router-dom";


const RegForm = () => {
    const history = useNavigate()

    const [ppassword, setPpassword] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function registerUser(event) {
        event.preventDefault()

        const response = await fetch('http://localhost:8080/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                password,
                ppassword,
            }),
        })

        const data = await response.json()

        if (data.status === 'ok') {
            history.push('/')
        }
    }

    return (
        <div>

            <body className="fon">


                <div className="indent">

                </div>

                <form onSubmit={registerUser}>
                <div className="fon_window">

                <div className="fon_window_center">
                    <img src={logo} width="270" height="270" alt="test"/>
                </div>

                    <div className="container_inner">
                        <p className="font_inner">Почта:</p>
                        <input className="field_inner" type="text" size="15" value={email}
                               onChange={(e) => setEmail(e.target.value)}></input>


                    </div>
                    <div className="container_inner">
                        <p className="font_inner">Пароль:</p>
                        <input className="field_inner" type="password" size="16" value={password}
                               onChange={(e) => setPassword(e.target.value)}></input>
                    </div>
                    <div className="container_inner">
                        <p className="font_inner">Повторите пароль:</p>
                        <input className="field_inner" type="password" size="16" value={ppassword}
                               onChange={(e) => setPpassword(e.target.value)}></input>
                    </div>
                    <div className="fon_window_center">
                        <button className="button_in" type="submit">Зарегистрироваться</button>
                    </div>


                <Link to="/menu" className="fon_window_center">
                    <a className="button_in3" href="/">Назад</a>
                </Link>
                </div>
                </form>
            </body>
        </div>
    );
};


export default RegForm;