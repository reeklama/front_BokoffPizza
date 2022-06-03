import React, {useEffect, useState} from 'react';
import axios from "axios";
import MPizzaBlock from "./MPizzaBlock";
import SizePizza from "./SizePizza";

const AddPizza = () => {

    let token = localStorage.getItem('token')

    const [name, setName] = useState('')
    const [pictureURL, setUrl] = useState('')
    const [productModels, setProd] = useState([])
    const [dishSizeModels, setSize] = useState([])

    const [dishes, setDishes] = useState([])
    const [open, setOpen] = React.useState(false);

    async function fetchDishes(){
        const response = await axios.get("http://localhost:8080/menu")
        setDishes(response.data)

    }

    function viewpizzas(dish) {
        console.log(dish);
        setName(dish.name);



    }


    async function addNewPizza(event) {

        setSize(sizeprice())
        setProd(trendarray())

        event.preventDefault()

        const response = await fetch("http://localhost:8080/menu", {
            method: 'POST',
            headers: {
                Authorization: token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name,
                pictureURL,
                productModels,
                dishSizeModels
            }),
        })

        const data = await response.json()

        if (data.status === 'ok') {

        }
    }


    const [checkList, setCheckList] = useState([])
    const [arr, setArr] = useState([])

    async function fetchProduct(){
        const response = await axios.get("http://localhost:8080/product",{
            headers: {
                Authorization: token,
                'Content-Type': 'application/json'
            }
        })
        setCheckList(response.data)
    }

    useEffect(()=>{
        fetchDishes()
        fetchProduct()
    }, [])

    const handleCheck = (event) => {
        var updatedList = [...arr];
        if (event.target.checked) {
            updatedList = [...arr, event.target.value];
        } else {
            updatedList.splice(arr.indexOf(event.target.value), 1);
        }
        setArr(updatedList);
    };

    const checkedItems = arr.length
        ? arr.reduce((total, item) => {
            return total + ", " + item;
        })
        : "";

    var isChecked = (item) =>
        arr.includes(item) ? "checked-item" : "not-checked-item";


    const [price23, setPrice23] = useState(0);
    const [price30, setPrice30] = useState(0);
    const [price35, setPrice35] = useState(0);


    const trendarray = () => {
            arr.map((item) => {
                productModels.push(
                    {
                    name : item
                }
                )
            })
    }

    const sizeprice = () => {
        return (
            dishSizeModels.push({
                    "size" : '23',
                    "price" : price23
                },
                {
                    "size" : '30',
                    "price" : price30
                },
                {
                    "size" : '36',
                    "price" : price35
                })
        )
    }





    return (
        <div className="rectanglePiz">
            <section>
                <form onSubmit={addNewPizza}>
                    <p>Добавление пиццы</p>
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