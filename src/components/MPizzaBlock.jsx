import React from 'react';
import PropTypes from "prop-types";

const MPizzaBlock = (props) => {


    const onAddPizza = (id, name, pictureURL, price) => {
        const obj = {
            id,
            name,
            pictureURL,
            price
        };
        props.onClickAddPizza(obj);
    };

    return (
        <div className="product">
            <div className="picture-product">
                <img src={props.pictureURL} width="300" height="200" alt="Пример"/>
            </div>
            <p className="product-name">{props.name}</p>
            <div onClick={onAddPizza(props.id,props.name,props.pictureURL,props.price)} className="add-to-purchase">
                <button className="add-to-purchase-btn">
                    <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                            fill="white"
                        />
                    </svg>
                    <span>Добавить в корзину</span>
                    </button>
                <p className="price">0 рублей</p>
            </div>
        </div>

    );
};

MPizzaBlock.propTypes = {
    name: PropTypes.string,
    pictureURL: PropTypes.string,
    price: PropTypes.number,
    types: PropTypes.arrayOf(PropTypes.number),
    sizes: PropTypes.arrayOf(PropTypes.number),
    onClickAddPizza: PropTypes.func,
    addedCount: PropTypes.number,
};

MPizzaBlock.defaultProps = {
    name: '---',
    price: 0,
    types: [],
    sizes: [],
};

export default MPizzaBlock;