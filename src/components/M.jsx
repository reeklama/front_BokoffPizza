import React, {useEffect, useState} from 'react';
import axios from "axios";
import MPizzaBlock from "./MPizzaBlock";

const M = () => {
    const [dishes, setDishes] = useState([])
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

    const onAddPizza = (id, name, pictureURL, price) => {

    };

    return (
        <div>
            <section className="products">
                {
                    dishes.map((dish) =>
                        <MPizzaBlock id={dish.id} name={dish.name} pictureURL={dish.pictureURL}
                                     price="900" types="Big" sizes="bigbig" onClickAddPizza={onAddPizza}
                                     count='0'/>
                    )
                }
            </section>
        </div>
    )
};

export default M;