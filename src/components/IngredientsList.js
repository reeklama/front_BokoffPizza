import React, {useEffect, useState} from 'react';
import {wait} from "@testing-library/user-event/dist/utils";
import axios from "axios";
import MPizzaBlock from "./MPizzaBlock";

const IngredientsList = (props) => {

    const [checked, setChecked] = useState([]);

    const [checkList, setCheckList] = useState([])

    const returnValue = () => {
        props.confirmIngr(checked)
    }


    async function fetchDishes(){
        const response = await axios.get("http://localhost:8080/Product")
        setCheckList(response.data)
    }

    useEffect(()=>{
        fetchDishes()
    }, [])



    const handleCheck = (event) => {
        var updatedList = [...checked];
        if (event.target.checked) {
            updatedList = [...checked, event.target.value];
        } else {
            updatedList.splice(checked.indexOf(event.target.value), 1);
        }
        setChecked(updatedList);
    };

    const checkedItems = checked.length
        ? checked.reduce((total, item) => {
            return total + ", " + item;
        })
        : "";

    var isChecked = (item) =>
        checked.includes(item) ? "checked-item" : "not-checked-item";

    return (
        <div className="ingList">
            <br />
            <div className="checkList">
                <div className="list-container-ing">
                    {
                        checkList.map((dish, index) =>
                            <div key={index}>
                                <input value={dish.name} type="checkbox" onChange={handleCheck} />
                                <span className={isChecked(dish.name)}>{dish.name}</span>
                            </div>
                        )
                    }
                </div>
        </div>
            <br />
            <div>
                {`Вы выбрали: ${checkedItems}`}
            </div>
            <button onClick={returnValue}>Подтвердить</button>
        </div>

    );
};

export default IngredientsList;