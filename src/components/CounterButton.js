import React, { useState } from 'react';
import '../style/Dish.css';

const CounterButton = function () {

    const [count, setCount] = useState(1)

    function increment() {
        setCount(count + 1)
    }

    function decrement() {
        setCount( Math.max(count - 1, 1))
    }

    return (
        <div className="rectangleCounter">
            <button className="plusminus" onClick={decrement}>-</button>
            <>{count}</>
            <button className="plusminus" onClick={increment}>+</button>
        </div>
    );
};

export default CounterButton;
