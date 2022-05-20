import React, {useState} from 'react';

import {wait} from "@testing-library/user-event/dist/utils";

const AddIngredient = () => {

    let token = localStorage.getItem('token')

    const [name, setName] = useState('')
    const [but, setBut] = useState('Добавить')


    async function addIngr(event) {
        event.preventDefault()

        const response = await fetch('http://localhost:8080/Product', {
            method: 'POST',
            headers: {
                Authorization: token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name
            }),
        })

        const data = await response.json()

        if (data.status === 'Ингредиент добавлен') {
            setBut("Добавлен");
            setBut("Добавить");
        }
    }

    return (
            <div className="rectangle">
                Добавление ингредиента
                <form onSubmit={addIngr}>
                    <div className="container_inner4">
                        <p className="font_inner4"></p>
                        <input className="field_inner4" type="text" size="10"  placeholder="Ингредиент" value={name} onChange={(e) => setName(e.target.value)}/>
                    </div>
                    <div >
                        <button className="addButton" type="submit">
                            {but}
                        </button>
                    </div>
                </form>
            </div>
    );
};

export default AddIngredient;