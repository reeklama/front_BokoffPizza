import React from 'react';
import HeadMain from "../components/Head";

const Thanks = () => {
    return (
        <div>
            <HeadMain/>
            <p className="thanks">Спасибо за заказ!</p>
            <p className="ordertext">Наш курьер свяжется с Вами :)</p>
        </div>
    );
};

export default Thanks;
