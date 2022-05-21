import React from 'react';
import HeadMain from "../components/Head";
import OrderList from "../components/OrderList";
import ToAdminBlock from "../components/ToAdminBlock";


const Personal = () => {
    return (
        <div className="main-container">
            <HeadMain/>
            <ToAdminBlock/>
            <div className="orders-container">
                <OrderList/>
            </div>
        </div>
    );
};

export default Personal;