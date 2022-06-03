import React, {useEffect, useState} from 'react';
import '../style/Admin.css';
import {wait} from "@testing-library/user-event/dist/utils";
import axios from "axios";


const AddAdmin = () => {

    let token = localStorage.getItem('token')

    const [mail, setMail] = useState('')
    const [but, setBut] = useState('Добавить')
    const roleName = 'ROLE_ADMIN'

    async function setAdmin(event) {
        event.preventDefault()

        const response = await fetch('http://localhost:8080/addRole', {
            method: 'POST',
            headers: {
                Authorization: token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                mail,
                roleName
            }),
        })

        const data = await response.json()

        console.log(response)
        console.log(response.status)

        if (data.status === 'Роль добавлена') {

        }
    }

    async function delAdmin(event) {
        event.preventDefault()

        const response = await fetch('http://localhost:8080/addRole', {
            method: 'POST',
            headers: {
                Authorization: token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                mail,
                roleName
            }),
        })

        const data = await response.json()

        if (data.status === 'Роль удалена') {

        }
    }

    return (
        <>
            <div class="rectangle">

                <form onSubmit={setAdmin}>
                    <>Добавление администратора</>
                <div className="container_inner4">
                    <p className="font_inner4"></p>
                    <input className="field_inner4" type="text" size="10"  placeholder="Почта"
                    value={mail} onChange={(e) => setMail(e.target.value)}/>
                </div>
                <div>
                    <button className="addButton" type="submit">
                        {but}
                    </button>
                </div>
                </form>
            </div>

            <div className="rectangle">
                Удаление администратора
                <form onSubmit={delAdmin}>
                    <div className="container_inner4">
                        <p className="font_inner4"></p>
                        <input className="field_inner4" type="text" size="10" placeholder="Почта"
                               value={mail} onChange={(e) => setMail(e.target.value)}/>
                    </div>
                    <div >
                        <button className="addButton" type="submit">
                            Удалить
                        </button>
                    </div>
                </form>
            </div>

        </>

    );
};

export default AddAdmin;