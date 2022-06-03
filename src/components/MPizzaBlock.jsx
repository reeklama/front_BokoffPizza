import React, {useState} from 'react';
import BasketContext from "../App";
import trash from "../resources/img/trash.png";
import {Link} from "react-router-dom";
import star from "../resources/img/star.svg";

const MPizzaBlock = (props) => {

    const obj = {
        id : props.id,
        name : props.name,
        pictureURL: props.pictureURL,
        products: props.products,
        dishSizeModels: props.dishSizeModels
    };
    const [ but, setBut ] = useState("Добавить в корзину");
    async function addToFavorites() {
        let token = localStorage.getItem('token')
        let name = obj.name
        alert('Вы добавили пиццу в избранное: ' + obj.name)
        const response = await fetch('http://localhost:8080/favorites', {
            method: 'POST',
            headers: {
                Authorization: token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name})
        })
        console.log(await response)
    }
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
                    {/*<Link to="/dish" state={ {obj} } className="picture-product">
                        <img src={props.pictureURL} width="300" height="200" alt="Пример"/>
                    </Link>*/}
                    <button className="zoomable-pic" onClick={ (e) =>
                        (e.target.className==="zoomable-pic") ? addToFavorites() : false }>
                        <Link to="/dish" state={ {obj} } className="picture-product">
                            <img src={props.pictureURL} className="zoomable-pic__image" width="300" height="200" alt="Пример"/>
                        </Link>
                        {/*<img className="zoomable-pic__image" src={star}/>*/}
                    </button>
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
