import React, {useState} from 'react';


const SizePizza = () => {

    const [checked, setChecked] = useState([]);
    const checkList = ["23", "30", "36"];

    const handleCheck = (event) => {
        var updatedList = [...checked];
        if (event.target.checked) {
            updatedList = [...checked, event.target.value];
        } else {
            updatedList.splice(checked.indexOf(event.target.value), 1);
        }
        setChecked(updatedList);
    };

    var isChecked = (item) =>
        checked.includes(item) ? "checked-item" : "not-checked-item";

    return (
            <div className="checkList">
                <div className="list-container-size">
                    {checkList.map((item, index) => (
                        <div key={index}>
                            <input value={item} type="checkbox" onChange={handleCheck} />
                            <span className={isChecked(item)}>{item}</span>
                        </div>
                    ))}
                </div>
        </div>
    );
};

export default SizePizza;