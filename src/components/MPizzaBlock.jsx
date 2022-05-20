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

    const [ price123, setPrice123 ] = useState(1000);

    const [ size1, setSize1 ] = useState(23);
    const [ size2, setSize2 ] = useState(30);
    const [ size3, setSize3 ] = useState(35);

    const [ set1, setSet1 ] = useState("On");
    const [ set2, setSet2 ] = useState("Off");
    const [ set3, setSet3 ] = useState("Off");


    const [ price1, setPrice1 ] = useState("Off");
    const [ price2, setPrice2 ] = useState("Off");
    const [ price3, setPrice3 ] = useState("Off");





    const changeSet = (size) => {
        if (set1 === "off" && set1 === "off" && set1 === "off"){
            setSet1("On")
            setPrice123()
        }
        return null
    }


    const firstly = (price) => {
        if (price < price123){
            setPrice123(price)
        }
        return price
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
