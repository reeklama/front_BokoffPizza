import React from 'react';
import '../style/userpage.css';

const OrderItem = (props) => {
    return (
        <div className="order">
            <p className="order-text order-text-id">{props.order.id}</p>
            <p className="order-text order-text-date">Дата заказа: {props.order.date}</p>
            <div className="dishes-container">
                {
                    props.order.dishes.map(dish => <p className="order-text">{dish.name}</p>)
                }
            </div>
        </div>
    );
};

export default OrderItem;