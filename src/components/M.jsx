import React, {useEffect, useState} from 'react';
import axios from "axios";
import MPizzaBlock from "./MPizzaBlock";
import logo from "../resources/img/logo.png";
import trash from "../resources/img/trash.png";
import {Link} from "react-router-dom";

const M = (props) => {
    const [dishes, setDishes] = useState([])
    const [filter, setFilter] = useState('')
    const [button, setButton] = useState([{
        isPressed:false,
        dish_id:null
    }])
    async function fetchDishes(){
        const response = await axios.get("http://localhost:8080/menu")
        setDishes(response.data)
    }

    useEffect(()=>{
        fetchDishes()
    }, [])

    const handleAddPizzaToCart2  = (obj, str) => {
        props.handleAddPizzaToCart2(obj, str);
    }
    function filterDishes() {
        //console.log(typeof dishes)
        return dishes.filter(dish => dish.name.includes(filter))
    }
    const filteredDishes = filterDishes()
    //console.log(filteredDishes)
    return (
        <div>

            <section className="search">
                <h3 className="search_h">Поиск: </h3>
                <input type="search" className="search_line" placeholder="Введите название блюда или ингридиент"
                    onChange={e => setFilter(e.target.value)}/>
            </section>
            <section>
                <Link to="/shoppingcart">
                    <img src={trash} width="75" height="75" alt="Пример"/>
                </Link>
            </section>
            <section className="products">
                {
                    filteredDishes.map((dish) =>
                        <MPizzaBlock id={dish.id} name={dish.name} pictureURL={dish.pictureURL}
                                     products={dish.productModels} dishSizeModels={dish.dishSizeModels} handleAddPizzaToCart2={handleAddPizzaToCart2 }
                                     count='0'/>
                    )
                }
            </section>
        </div>
    )
};

export default M;
