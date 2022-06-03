import React from 'react';
import HeadMain from "../components/Head";
import ShopCart from "../components/ShopCart";
import '../style/ShoppingCart.css';
import MPizzaBlock from "../components/MPizzaBlock";

const ShoppingCart = (props) => {

    console.log(props.arr);

    if (props.arr[0] === null || props.arr.length === 0){
        console.log(props);
        return (
            <div>
                <HeadMain/>
                <ShopCart/>
                <div className="cartEmpty">Ваша корзина пуста :(</div>
            </div>
        )
    }
    return (
        <div>
            <HeadMain/>
            <ShopCart obj={props.arr[0]}/>
            <div>{props.arr[0].price}</div>
        </div>
    );
};
export default ShoppingCart;
