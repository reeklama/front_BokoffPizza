import React from 'react';

const AddIngredient = () => {
    return (
            <div className="rectangle">
                Добавление ингредиента
                <div className="container_inner4">
                    <p className="font_inner4"></p>
                    <input className="field_inner4" type="text" size="10"  placeholder="Ингредиент"/>
                </div>
                <button className="addButton">Добавить</button>
            </div>
    );
};

export default AddIngredient;