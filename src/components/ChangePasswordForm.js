import React, {useState} from 'react';
import '../style/userpage.css';

const ChangePasswordForm = () => {
    const [oldPassword, setOldPassword] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')

    async function setChangedPassword() {
        let token = localStorage.getItem('token')
        let request_body = {
            oldPassword : oldPassword,
            newPassword: password,
            newPasswordConfirm : passwordConfirm
        }
        console.log(JSON.stringify(request_body))
        const response = await fetch('http://localhost:8080/cabinet/changepass', {
            method: 'PUT',
            headers: {
                Authorization: token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(request_body)
        })

        console.log(response)
    }

    return (
        <form onSubmit={(e) => {
            setChangedPassword()
            e.preventDefault()
        }}>
            <div className="fon_window">
                <div className="container_inner">
                    <p className="font_inner">Пароль:</p>
                    <input className="field_inner" type="password" size="16" placeholder="Old password" value={oldPassword}
                           onChange={(e) => setOldPassword(e.target.value)}></input>
                    <input className="field_inner" type="password" size="16" placeholder="Password" value={password}
                           onChange={(e) => setPassword(e.target.value)}></input>
                    <input className="field_inner" type="password" size="16" placeholder="Confirm password" value={passwordConfirm}
                           onChange={(e) => setPasswordConfirm(e.target.value)}></input>
                </div>
                {/*<div className="container_inner">
                    <p className="font_inner">Повторите пароль:</p>
                    <input className="field_inner" type="password" size="16" placeholder="Password" value={passwordConfirm}
                           onChange={(e) => setpasswordConfirm(e.target.value)}></input>
                </div>*/}
                <div className="fon_window_center">
                    <button className="button_in" type="submit">Сменить пароль</button>
                </div>
            </div>
        </form>
    );
};

export default ChangePasswordForm;