import React from 'react';
import '../style/Admin.css';
import IngredientsList from "./IngredientsList";
import SizePizza from "./SizePizza";

const AddNamePizza = () => {
    return (
        <div className="addPizza">
            Название
            <div className="container_inner5">
                <p className="font_inner5"></p>
                <input className="field_inner5" type="text" size="30"  placeholder="Название"/>
            </div>
            <br />
            URL
            <div className="container_inner5">
                <p className="font_inner5"></p>
                <input className="field_inner5" type="text" size="30"  placeholder="URL"/>
            </div>
            <br />
            Ингредиенты
            <br />  <br />
            <IngredientsList/>
            <br />  <br />
            Диаметр пиццы
            <br />  <br />
            <SizePizza/>
            <br />
            Цена
            <div className="container_inner5">
                <p className="font_inner5"></p>
                <input className="field_inner5" type="text" size="30"  placeholder="Цена"/>
            </div>
            <button className="addButton">Добавить</button>
        </div>
    );
};

export default AddNamePizza;