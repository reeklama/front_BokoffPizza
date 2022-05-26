import React, {useEffect, useState} from 'react';
import axios from 'axios';
import OrderItem from "./OrderItem";
import '../style/userpage.css';
import Loader from "./Loader/Loader";

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
    const [hasOrders, setHasOrders] = useState(false)
    const [isOrdersLoading, setOrdersLoading] = useState(false)
    async function getOrdersFromServer() {
        setHasOrders(true)
        setOrdersLoading(true)
        const response = await fetch('http://localhost:8080/cabinet', {
            headers: {
                Authorization: token,
                'Content-Type': 'application/json'
            }
        })
        try {
            let r = await response.json()
            //console.log(r)
            if (r === [])
                setHasOrders(false)
            setOrders(r)
        }
        catch (e) {
            console.log(e)
            setHasOrders(false)
        }
        setOrdersLoading(false)
    }
    useEffect(() => {
        getOrdersFromServer()
    }, [])
    return (
        <div className="order-list">
            <h1 className="d">История заказов</h1>
            {hasOrders ?
                orders.map((order) =>
                <div>
                    <h-line/>
                    <OrderItem order={order}/>
                </div>)
                :  <p>Заказов пока не было :(</p>
            }
            {
                isOrdersLoading ?
                <Loader/> :
                    <div></div>
            }
        </div>
    );
};

export default OrderList;