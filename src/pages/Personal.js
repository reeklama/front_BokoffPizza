import React from 'react';
import HeadMain from "../components/Head";
import OrderList from "../components/OrderList";
import ToAdminBlock from "../components/ToAdminBlock";
import ChangePasswordForm from "../components/ChangePasswordForm";
import Favorites from "../components/Favorites";

const Personal = () => {
    return (
        <div className="main-container">
            <HeadMain/>
            <ToAdminBlock/>
            <Favorites/>
            <ChangePasswordForm/>
            <div className="orders-container">
                <OrderList/>
            </div>
        </div>
    );
};

export default Personal;