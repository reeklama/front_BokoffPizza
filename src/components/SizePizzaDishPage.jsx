import React, {useRef, useState} from 'react';

const SizePizzaDishPage = (props) => {

    const [size, setSize] = useState(props);
    console.log(size);

    return (
        <div className="sizes">
            <input
                type="radio"
                value="23"
                name="size"

                onChange={(e) => setSize(e.target.value)}
            />
            23
            <input
                type="radio"
                value="30"
                name="size"
                onChange={(e) => setSize(e.target.value)}
            />
            30
            <input
                type="radio"
                value="36"
                name="size"
                onChange={(e) => setSize(e.target.value)}
            />
            36
        </div>
    );
};

export default SizePizzaDishPage;
