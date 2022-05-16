import React from 'react';
import Block from "./Block";
import UserInfo from "./UserInfo";

const ShopCart = () => {
    return (
        <div>
            <p className="yourorder">Ваш заказ</p>
            <br /> <br />
            <Block/>
            <UserInfo/>
        </div>
    );
};

export default ShopCart;
