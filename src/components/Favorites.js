import React, {useEffect, useState} from 'react';
import '../style/userpage.css';
import Loader from "./Loader/Loader";
const Favorites = () => {
    const [dishes, setDishes] = useState([])
    const [hasFavor, setHasFavor] = useState(false)
    const [isFavorsLoading, setFavorsLoading] = useState(false)
    async function getFavoriteDishes() {
        setHasFavor(true)
        setFavorsLoading(true)
        let token = localStorage.getItem('token')
        const response = await fetch('http://localhost:8080/favorites', {
            headers: {
                Authorization: token,
                'Content-Type': 'application/json'
            }
        })
        console.log(await response)
        try {
            setDishes(await response.json())
        } catch (e) {
            console.log(e)
            setHasFavor(false)
        }
        setFavorsLoading(false)
    }
    useEffect(() =>{getFavoriteDishes()}, [])
    return (
        <div className="order-list">
            <h1 className="d">Избранные блюда</h1>
            {hasFavor ?
                dishes.map((dish) =>
                    <div>
                        <h-line/>
                        <p className="order-text">{dish.name}</p>
                    </div>)
            : <p>В избранное пока ничего не добавлено :(</p>}
            {
                isFavorsLoading ?
                    <Loader/> :
                    <div></div>
            }
        </div>
    );
};

export default Favorites;