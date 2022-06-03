import React from 'react';
import Block from "./Block";
import UserInfo from "./UserInfo";
import {useLocation} from "react-router";


const ShopCart = (props) => {

    // const obj = {
    //     id : props.id,
    //     name : props.name,
    //     pictureURL: props.pictureURL,
    //     products: props.products,
    //     dishSizeModels: props.dishSizeModels
    // };
    //

    return (
        <div>
            <p className="yourorder">Ваш заказ</p>
            <br /> <br />
            <Block obj={props}/>
            {/*//<Block/>*/}
            <UserInfo/>
        </div>
    );
};

export default ShopCart;
