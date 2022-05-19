import React, {useEffect, useState} from 'react';
import axios from "axios";
import MPizzaBlock from "./MPizzaBlock";
import SizePizza from "./SizePizza";

const AddPizza = () => {

    const [name, setName] = useState('')
    const [pictureURL, setUrl] = useState('')
    const [productsModels, setProd] = useState([])
    const [dishSizeModels, setSize] = useState([])


    async function addNewPizza(event) {

        setSize(sizeprice())


        event.preventDefault()

        const response = await fetch('http://localhost:8080/api/v1/registration', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name,
                pictureURL,
                productsModels,
                dishSizeModels
            }),
        })

        const data = await response.json()

        if (data.status === 'ok') {

        }
    }


    const [checkList, setCheckList] = useState([])

    async function fetchDishes(){
        const response = await axios.get("http://localhost:8080/Product")
        setCheckList(response.data)
    }

    useEffect(()=>{
        fetchDishes()
    }, [])

    const handleCheck = (event) => {
        var updatedList = [...productsModels];
        if (event.target.checked) {
            updatedList = [...productsModels, event.target.value];
        } else {
            updatedList.splice(productsModels.indexOf(event.target.value), 1);
        }
        setProd(updatedList);
    };

    const checkedItems = productsModels.length
        ? productsModels.reduce((total, item) => {
            return total + ", " + item;
        })
        : "";

    var isChecked = (item) =>
        productsModels.includes(item) ? "checked-item" : "not-checked-item";


    const [price23, setPrice23] = useState('');
    const [price30, setPrice30] = useState('');
    const [price35, setPrice35] = useState('');

    const sizeprice = () => {
        return (
            '{"size":"23", "price":"' + {price23} + '"}, ' +
            '{"size":"30", "price":"' + {price30} + '"},' +
            '{"size":"35", "price":"' + {price35} + '"}'
        )
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
                        <input className="field_inner5" type="text" size="30"  placeholder="URL" value={pictureURL} onChange={(e) => setUrl(e.target.value)}/>
                    </div>
                    <br />
                    Ингредиенты
                    <br />  <br />

                    <div className="ingList">
                        <br />
                        <div className="checkList">
                            <div className="list-container-ing">
                                {
                                    checkList.map((dish, index) =>
                                        <div key={index}>
                                            <input value={dish.name} type="checkbox" onChange={handleCheck} />
                                            <span className={isChecked(dish.name)}>{dish.name}</span>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                        <br />
                        <div>
                            {`Вы выбрали: ${checkedItems}`}
                        </div>
                    </div>
                    <br />  <br />
                    Диаметр пиццы
                    <br />  <br />
                    <div className="checkList">
                        23 см
                        <div className="container_inner5">
                            <p className="font_inner5"></p>
                            <input className="field_inner5" type="text" size="30"  placeholder="Цена" value={price23} onChange={(e) => setPrice23(e.target.value)}/>
                        </div>
                        30 см
                        <div className="container_inner5">
                            <p className="font_inner5"></p>
                            <input className="field_inner5" type="text" size="30"  placeholder="Цена" value={price30} onChange={(e) => setPrice30(e.target.value)}/>
                        </div>
                        35 см
                        <div className="container_inner5">
                            <p className="font_inner5"></p>
                            <input className="field_inner5" type="text" size="30"  placeholder="Цена" value={price35} onChange={(e) => setPrice35(e.target.value)}/>
                        </div>
                    </div>
                    <br />
                    <button className="addButton" type={"submit"}>Добавить</button>
                </div>
                </form>
            </section>
        </div>
    );
};

export default AddPizza;