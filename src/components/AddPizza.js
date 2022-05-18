import React, {useEffect, useState} from 'react';
import axios from "axios";
import MPizzaBlock from "./MPizzaBlock";
import IngredientsList from "./IngredientsList";
import SizePizza from "./SizePizza";

const AddPizza = () => {

    const [name, setName] = useState('')
    const [url, setUrl] = useState('')
    const [price, setPrice] = useState('')
    const [ingr, setIngr] = useState([])
    const [size, setSize] = useState('')
    const confirmIngr = (arr) => {
        setIngr(arr)
    }

    async function addNewPizza(event) {
        event.preventDefault()

        const response = await fetch('http://localhost:8080/api/v1/registration', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name,
                url,
                ingr,
                size,
                price
            }),
        })

        const data = await response.json()

        if (data.status === 'ok') {

        }
    }


    return (
        <div className="rectanglePiz">
            <p>Добавление пиццы</p>
            <br />
            <section>
                <form onSubmit={addNewPizza}>
                <div className="addPizza">
                    Название
                    <div className="container_inner5">
                        <p className="font_inner5"></p>
                        <input className="field_inner5" type="text" size="30"  placeholder="Название" value={name} onChange={(e) => setName(e.target.value)}/>
                    </div>
                    <br />
                    URL
                    <div className="container_inner5">
                        <p className="font_inner5"></p>
                        <input className="field_inner5" type="text" size="30"  placeholder="URL" value={url} onChange={(e) => setUrl(e.target.value)}/>
                    </div>
                    <br />
                    Ингредиенты
                    <br />  <br />
                    <IngredientsList confirmIngr={confirmIngr}/>
                    <br />  <br />
                    Диаметр пиццы
                    <br />  <br />
                    <SizePizza/>
                    <br />
                    Цена
                    <div className="container_inner5">
                        <p className="font_inner5"></p>
                        <input className="field_inner5" type="text" size="30"  placeholder="Цена" value={price} onChange={(e) => setPrice(e.target.value)}/>
                    </div>
                    <button className="addButton">Добавить</button>
                </div>
                </form>
            </section>
        </div>
    );
};

export default AddPizza;