import React from 'react';
import HeadMain from "../components/Head";
import OrderList from "../components/OrderList";


const Personal = () => {
    return (
        <div>
            <HeadMain/>
            <div className="orders-container">
                <OrderList/>
            </div>
        </div>
    );
};

export default Personal;