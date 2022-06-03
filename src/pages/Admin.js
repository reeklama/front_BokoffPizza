import React from 'react';
import HeadMain from "../components/Head";
import AddAdmin from "../components/AddAdmin";
import AddIngredient from "../components/AddIngredient";
import AddPizza from "../components/AddPizza";
import ChangePizza from "../components/ChangePizza";

const Admin = () => {
    return (
        <>
            <HeadMain/>
            <div className="adminPage">
                <div className="addAdmIng">
                    <AddIngredient/>
                    <AddPizza/>
                </div>
                <ChangePizza />
            </div>
        </>
    );
};

export default Admin;
