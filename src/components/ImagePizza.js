import React, { useState } from 'react';
import '../style/Dish.css';
import CounterButton from "./CounterButton";
import SizePizzaDishPage from "./SizePizzaDishPage";
import MPizzaBlock from "./MPizzaBlock";
import Block from "./Block";



const ImagePizza = (props) => {

    console.log(props.size);

    const getSize = () => {
        props.getSize(props.obj.size);
    };

    const [ but, setBut ] = useState("Добавить в корзину");

    const handleAddPizzaToCart = () => {
        props.handleAddPizzaToCart(props.obj);
    }

    function getPrice() {
        return props.obj.dishSizeModels.map((item) =>
            <div>
                {item.size} см : {item.price} ₽
            </div>)
    }
    return (
        <>
            <br/> <br/> <br/> <br/>
            <div className="dataDish">
                <img src={props.obj.pictureURL} width="600" height="400" align="left"/>
                <div className="span3">
                    <p className="name">{props.obj.name}</p>
                    <br/> <br/>
                    <p className="cost">
                        {getPrice()}
                    </p>
                    <br/> <br/> <br/> <br/>
                    <SizePizzaDishPage getSize = {getSize}/>
                    <br/> <br/> <br/>
                    <div className="outer">
                        <CounterButton/>
                        <div onClick={handleAddPizzaToCart} className="add-to-purchase">
                            <div className="fon_window_center">
                                <button className="button_add">
                                    <span>{but}</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <br/> <br/>
                    <p className="detailed">ПОДРОБНАЯ ИНФОРМАЦИЯ </p>
                    <br/>
                    <p className="info"> {
                        props.obj.products.map((post) =>
                            <div>
                                {post.name}  </div> )
                    }</p>
                </div>
            </div>

        </>
    );
};

export default ImagePizza;
