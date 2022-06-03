import React, {useEffect, useState} from 'react';
import '../style/Admin.css';
import {wait} from "@testing-library/user-event/dist/utils";
import axios from "axios";


const DelBlockAdmin = () => {

    let token = localStorage.getItem('token')

    const [checkList, setCheckList] = useState([])
    const [arr, setArr] = useState([])

    async function fetchDishes(){
        const response = await axios.get("http://localhost:8080/users",{
            headers: {
                Authorization: token,
                'Content-Type': 'application/json'
            }
        })
        setCheckList(response.data)
    }

    useEffect(()=>{
        fetchDishes()
    }, [])

    const checkedItems = arr.length
        ? arr.reduce((total, item) => {
            return total + ", " + item;
        })
        : "";

    var isChecked = (item) =>
        arr.includes(item) ? "checked-item" : "not-checked-item";

    const handleCheck = (event) => {
        var updatedList = [...arr];
        if (event.target.checked) {
            updatedList = [...arr, event.target.value];
        } else {
            updatedList.splice(arr.indexOf(event.target.value), 1);
        }
        setArr(updatedList);
    };

    const [mails, setUser] = useState([])

    const delPeople = async () => {

        setUser(trendarray())

        const response = await fetch('http://localhost:8080/deleteuser', {
            method: 'DELETE',
            headers: {
                Authorization: token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                mails
            }),
        })

        const data = await response.json()

        if (data.status === 'Пользователи удалены') {

        }
    }

    const blockPeople = async () => {

        setUser(trendarray())

        const response = await fetch('http://localhost:8080/ban', {
            method: 'PUT',
            headers: {
                Authorization: token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                mails
            }),
        })

        const data = await response.json()

        if (data.status === 'Пользователи заблокированы') {

        }
    }

    const trendarray = () => {
        arr.map((item) => {
            mails.push(
                    item
            )
        })
    }

    return (
        <>
            <div className="rectanglePiz">
                <p>Список пользователей</p>
                <div className="ingList1">
                    <br />
                    <div className="checkList">
                        <div className="list-container-ing">
                            {
                                checkList.map((dish, index) =>
                                    <div key={index}>
                                        <input value={dish} type="checkbox" onChange={handleCheck} />
                                        <span className={isChecked(dish)}>{dish}</span>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                    <br />
                    <div>
                        {`Вы выбрали: ${checkedItems}`}
                    </div>
                </div>
                <div >
                    <button className="addButton" onClick={delPeople}>
                        Удалить
                    </button>
                </div>
            <br />
                <div >
                    <button className="addButton" onClick={blockPeople}>
                        Заблокировать
                    </button>
                </div>
            </div>
        </>

    );
};

export default DelBlockAdmin;