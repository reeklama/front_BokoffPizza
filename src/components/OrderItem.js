import React from 'react';
import '../style/userpage.css';

const OrderItem = (props) => {
    let date = new Date(props.order.order_date)
    return (
        <div className="order">
            <p className="order-text order-text-date">
                Дата заказа: {date.getDate()}.{date.getMonth()}.{date.getFullYear()}  {date.getHours()}:{date.getMinutes()}
            </p>
            <div className="dishes-container">
                {
                    props.order.orderListModels.map(dish => <p className="order-text">{dish.name} X {dish.amount}</p>)
                }
            </div>
        </div>
    );
};

export default OrderItem;