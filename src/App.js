import React, {useEffect, useState} from 'react';
import './style/App.css';
import './style/userpage.css';
import './style/listpage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu  from "./pages/Menu";
import Auth  from "./pages/Auth";
import Reg from "./pages/Registration";
import ShoppingCart  from "./pages/ShoppingCart";
import Thanks  from "./pages/Thanks";
import Admin from "./pages/Admin";
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import {AuthContext} from "./context";
import Dish from "./pages/Dish";
import Personal from "./pages/Personal";
import SysAdmin from "./pages/SysAdmin";


export const App = () => {
    const [isAuth, setIsAuth] = useState(false)
    const [basket, setBasket] = useState([])
    useEffect(() => {
        if(localStorage.getItem('auth')){
            setIsAuth(true)
        }
    }, [])

    let pizzas = [];
    const handleAddPizzaToCart2  = (obj, str) => {
        if (str === "add"){
            pizzas.push(obj);
        } else {
            pizzas.pop(obj)
        }
    }

    const handleAddPizzaToCart  = (obj) => {
        pizzas.push(obj);
    }

    const getSize = (size) => {
        return size;
    }

    return (

            <AuthContext.Provider value ={{
                isAuth,
                setIsAuth
            }}>
                <Router>
                    <Routes>
                        <Route exact path="/menu" element={<Menu handleAddPizzaToCart2={handleAddPizzaToCart2}/>} />
                        <Route exact path="/login" element={<Auth />} />
                        <Route exact path="/registration" element={<Reg />} />
                        <Route exact path="/shoppingcart" element={<ShoppingCart arr={pizzas} />} />
                        <Route exact path="/thanks" element={<Thanks />} />
                        <Route exact path="/admin" element={<Admin />} />
                        <Route exact path="/sysadmin" element={<SysAdmin />} />
                        <Route exact path="/lc" element={<Personal />} />
                        <Route exact path="/dish" element={<Dish  handleAddPizzaToCart={handleAddPizzaToCart} getSize={getSize}/>} />
                    </Routes>
                </Router>
            </AuthContext.Provider>

    );
}



