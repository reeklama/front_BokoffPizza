import React from 'react';
import HeadMain from "../components/Head";
import ShopCart from "../components/ShopCart";

const ShoppingCart = (props) => {

    if (props.arr === null || props.arr.length === 0){
        console.log(props);
        return (
            <div>
                <HeadMain/>
                <ShopCart/>
                <div>Ваша корзина пуста</div>
            </div>
        )
    }

    return (
        <div>
            <HeadMain/>
            <ShopCart />
            <div>{props.arr[0].price}</div>
        </div>
    );
};

export default ShoppingCart;
