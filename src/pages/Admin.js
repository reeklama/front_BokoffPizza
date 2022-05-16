import React from 'react';
import HeadMain from "../components/Head";
import AddAdmin from "../components/AddAdmin";
import AddIngredient from "../components/AddIngredient";
import AddPizza from "../components/AddPizza";

const Admin = () => {
    return (
        <>
            <HeadMain/>
            <div className="adminPage">
                <div className="addAdmIng">
                    <AddAdmin/>
                    <br />
                    <AddIngredient/>
                </div>
                <AddPizza/>
            </div>
        </>
    );
};

export default Admin;
