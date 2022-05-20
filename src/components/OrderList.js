import React, {useState} from 'react';
import OrderItem from "./OrderItem";
import '../style/userpage.css';


const OrderList = () => {
    const [orders, setOrders] = useState([
        {id: 1, date: '01.01.2001', dishes: [
                {name: 'Bolognese'},
                {name: 'Pizza al Pesto'}
            ]},
        {id: 2, date: '01.01.2002', dishes: [
            {name: 'Margherita'},
            {name: 'Mexicana'}
        ]}
    ])
    async function getOrdersFromServer() {
        /*const response = await fetch('http://localhost:8080/lc', { //TODO: change on orders api
            headers: {
                'Content-Type': 'application/json',
            }
        })*/

    }
    return (
        <div className="order-list">
            <h1 className="d">История заказов</h1>
            {orders.map((order) =>
                <div>
                    <h-line/>
                    <OrderItem order={order}/>
                </div>
            )}
        </div>
    );
};

export default OrderList;