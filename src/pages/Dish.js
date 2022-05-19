import React from 'react';
import Head from "../components/Head";
import Backbutton from "../components/Backbutton";
import ImagePizza from "../components/ImagePizza";
import {useLocation} from "react-router-dom";

const Dish = () => {

    const location = useLocation()
    const { obj } = location.state

    return (
        <div>
            <Head/>
            <Backbutton/>
            <ImagePizza obj={obj}/>
        </div>
    );
};

export default Dish;
