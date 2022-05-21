import React, {useEffect, useState} from 'react';
import axios from 'axios';
import OrderItem from "./OrderItem";
import '../style/userpage.css';
/*{id: 1, date: '01.01.2001', dishes: [
                {name: 'Bolognese'},
                {name: 'Pizza al Pesto'}
            ]},
        {id: 2, date: '01.01.2002', dishes: [
            {name: 'Margherita'},
            {name: 'Mexicana'}
        ]}*/

const OrderList = () => {
    const [orders, setOrders] = useState([])
    let token = localStorage.getItem('token')
    async function setChangedPassword(password) {
        // const response = await fetch('http://localhost:8080/cabinet', {
        //     method: 'POST',
        //     headers: {
        //         Authorization: token
        //     },
        //     body: {
        //         password: password
        //     }
        // })
        // console.log(response)
    }
    async function getOrdersFromServer() {
        const response = await fetch('http://localhost:8080/cabinet', {
            headers: {
                Authorization: token,
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
        let r = await response.json()
        //console.log(r)
        setOrders(r)
    }
    useEffect(() => {
        getOrdersFromServer()
    }, [])
    return (
        <div className="order-list">
            <h1 className="d">История заказов</h1>
            {
                orders.map((order) =>
                <div>
                    <h-line/>
                    <OrderItem order={order}/>
                </div>
            )}
        </div>
    );
};

export default OrderList;