import React, {useContext, useState} from 'react';
import logo from "../resources/img/logo.png";
import {AuthContext} from "../context";
import {Link, useHistory} from "react-router-dom";

const LogForm = () => {

    const [mail, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function loginUser(event) {
        event.preventDefault()

        const response = await fetch('http://localhost:8080/api/v1/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                mail,
                password,
            }),
        })

        const data = await response.json()
        console.log(data.token)
        if (data) {
            localStorage.setItem('token', data.token)
            localStorage.setItem('auth', true)
            localStorage.setItem('email', mail)
            alert('Login successful')
            window.location.href = '/menu'
            console.log({
                mail: data.get('mail'),
                password: data.get('password'),
            });
        } else {
            alert('Please check your username and password')
        }
    }

    return (
        <div className="fon_window">
            <div className="indent">

            </div>
            <div className="fon_window_center">
                <img src={logo} width="270" height="270" alt="test"/>
            </div>
            <form onSubmit={loginUser}>
                <div>
                    <div className="container_inner">
                        <p className="font_inner">Почта:</p>
                        <input name="mail" className="field_inner" type="text" size="15" placeholder="Email"
                               autoFocus="true" value={mail}
                               onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className="container_inner">
                        <p className="font_inner">Пароль:</p>
                        <input name="password" className="field_inner" type="password" size="16"
                               placeholder="Password" value={password}
                               onChange={(e) => setPassword(e.target.value)}/>
                    </div>

                    <div className="fon_window_center">
                        <button className="button_in" type="submit">Войти</button>
                    </div>


                    <div>
                        <p className="no_acc">Нет аккаунта?</p>
                    </div>
                    <div className="fon_window_center">
                        <a className="button_in2" href="/registration">Регистрация</a>
                    </div>


                    <Link to="/menu" className="fon_window_center">
                        <a className="button_in3" href="/">Назад</a>
                    </Link>

                </div>
            </form>
        </div>
    );
};

export default LogForm;