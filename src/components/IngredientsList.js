import React, {useState} from 'react';

const IngredientsList = () => {

    const [checked, setChecked] = useState([]);
    const checkList = ["Колбаса", "Сир", "Укроп", "Мама", "Лох", "Жопа", "Папа", "Ээээ"];

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
                    {checkList.map((item, index) => (
                        <div key={index}>
                            <input value={item} type="checkbox" onChange={handleCheck} />
                            <span className={isChecked(item)}>{item}</span>
                        </div>
                    ))}
                </div>
        </div>
            <br />
            <div>
                {`Вы выбрали: ${checkedItems}`}
            </div>
        </div>

    );
};

export default IngredientsList;