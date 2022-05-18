import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeadMain from "../components/Head";
import M from "../components/M";

function Menu(props) {

    const handleAddPizzaToCart2  = (obj, str) => {
        props.handleAddPizzaToCart2(obj, str);
    }

    return (
        <div className="wrapper">
            <HeadMain />
            <M handleAddPizzaToCart2={handleAddPizzaToCart2}/>
        </div>
    );
}

export default Menu;
