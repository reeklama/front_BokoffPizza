import React, {useState} from 'react';
import BasketContext from "../App";
import trash from "../resources/img/trash.png";
import {Link} from "react-router-dom";

const MPizzaBlock = (props) => {

    const obj = {
        id : props.id,
        name : props.name,
        pictureURL: props.pictureURL,
        products: props.products,
        dishSizeModels: props.dishSizeModels
    };

    const [ but, setBut ] = useState("Добавить в корзину");

    const handleAddPizzaToCart2 = () => {
        if (but === "Добавить в корзину") {
            props.handleAddPizzaToCart2(obj, "add");
            setBut("Убрать из корзины")
        } else {
            props.handleAddPizzaToCart2(obj, "remove")
            setBut("Добавить в корзину")
        }
    }

    return (

                <div className="product">
                    <Link to="/dish" state={ {obj} } className="picture-product">
                        <img src={props.pictureURL} width="300" height="200" alt="Пример"/>
                    </Link>
                    <p className="product-name">{props.name}</p>
                    <div onClick={handleAddPizzaToCart2} className="add-to-purchase">
                        <button className="add-to-purchase-btn">
                            <span>{but}</span>
                        </button>
                    </div>
                </div>




    );
};

export default MPizzaBlock;
