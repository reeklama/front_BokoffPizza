import React, {useState} from 'react';
import '../style/Admin.css';
import {wait} from "@testing-library/user-event/dist/utils";


const AddAdmin = () => {

    const [mail, setMail] = useState('')
    const [but, setBut] = useState('Добавить')
    const roleName = 'ROLE_ADMIN'

    async function setAdmin(event) {
        event.preventDefault()

        const response = await fetch('http://localhost:8080/addRole', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                mail,
                roleName
            }),
        })

        const data = await response.json()

        if (data.status === 'Роль добавлена') {
            setBut("Добавлен");
            await wait(5);
            setBut("Добавить");
        }
    }

    return (
        <>
            <div class="rectangle">
                Добавление администратора
                <form onSubmit={setAdmin}>
                <div className="container_inner4">
                    <p className="font_inner4"></p>
                    <input className="field_inner4" type="text" size="10"  placeholder="Почта"
                    value={mail} onChange={(e) => setMail(e.target.value)}/>
                </div>
                <div onClick={setAdmin}>
                    <button className="addButton" type="submit">
                        {but}
                    </button>
                </div>
                </form>
            </div>
        </>

    );
};

export default AddAdmin;