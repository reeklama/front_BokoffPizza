import React from 'react';
import HeadMain from "../components/Head";
import AddAdmin from "../components/AddAdmin";
import AddIngredient from "../components/AddIngredient";
import AddPizza from "../components/AddPizza";
import DelBlockPeople from "../components/DelBlockPeople";

const SysAdmin = () => {
    return (
        <>
            <HeadMain/>
            <div className="adminPage">
                <div className="addAdmIng">
                    <AddAdmin/>
                    <br />
                </div>
                <DelBlockPeople/>
            </div>
        </>
    );
};

export default SysAdmin;
