import React, {useEffect, useState} from 'react';
import axios from "axios";
import MPizzaBlock from "./MPizzaBlock";
import logo from "../resources/img/logo.png";
import trash from "../resources/img/trash.png";
import {Link} from "react-router-dom";

const M = (props) => {
    const [dishes, setDishes] = useState([])
    const [button, setButton] = useState([{
        isPressed:false,
        dish_id:null
    }])

    async function fetchDishes(){
        //const response = await axios.get("http://localhost:8080/menu")
        //setDishes(response.data)
        setDishes([{"id":4,"name":"Bolognese","pictureURL":"https://avatars.mds.yandex.net/i?id=79c3f73a6cc69ef16eb9da1e1d136f33-5484118-images-thumbs&n=13","products":[],"dishSizeModels":[]},
            {"id":3,"name":"Pizza al Pesto","pictureURL":"https://avatars.mds.yandex.net/i?id=85e2691f393afca87da28231ac92cdfa-5655805-images-thumbs&n=13","products":[],"dishSizeModels":[]},
            {"id":1,"name":"Mexicana","pictureURL":"https://avatars.mds.yandex.net/i?id=a30f499196814f2788948cf8d383cec4-5889050-images-thumbs&n=13","products":[],"dishSizeModels":[{"id":1,"dish_id":1,"unit":"см","size":40,"price":990}]},
            {"id":2,"name":"Margherita","pictureURL":"https://avatars.mds.yandex.net/i?id=0268981cbf5358988f5925166712a87d-4841525-images-thumbs&n=13","products":[],"dishSizeModels":[]}])
    }

    useEffect(()=>{
        fetchDishes()
    }, [])

    const handleAddPizzaToCart2  = (obj) => {
        props.handleAddPizzaToCart2(obj);
    }

    return (
        <div>
            <section className="search">
                <h3 className="search_h">Поиск: </h3>
                <input type="search" className="search_line" placeholder="Введите название блюда или ингридиент"/>
            </section>
            <section>
                <Link to="/shoppingcart">
                    <img src={trash} width="75" height="75" alt="Пример"/>
                </Link>
            </section>
            <section className="products">
                {
                    dishes.map((dish) =>
                        <MPizzaBlock id={dish.id} name={dish.name} pictureURL={dish.pictureURL}
                                     price="900" types="Big" sizes="bigbig" handleAddPizzaToCart2={handleAddPizzaToCart2 }
                                     count='0'/>
                    )
                }
            </section>
        </div>
    )
};

export default M;
