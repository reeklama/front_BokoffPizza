import React, {useState} from 'react';
import '../style/userpage.css';

const ChangePasswordForm = () => {
    const [password, setPassword] = useState('')

    async function setChangedPassword() {
        // const response = await fetch('http://localhost:8080/cabinet', {
        //     method: 'POST',
        //     headers: {
        //         Authorization: token
        //     },
        //     body: {
        //         password: password
        //     }
        // })
        // console.log(response)
    }

    return (
        <form onSubmit={setChangedPassword}>
            <div className="fon_window">
                <div className="container_inner">
                    <p className="font_inner">Пароль:</p>
                    <input className="field_inner" type="password" size="16" placeholder="Password" value={password}
                           onChange={(e) => setPassword(e.target.value)}></input>
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