import React, {useEffect, useState} from 'react';
import './style/App.css';
import './style/userpage.css';
import './style/listpage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu  from "./pages/Menu";
import Auth  from "./pages/Auth";
import Reg from "./pages/Registration";
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import {AuthContext} from "./context";


export const App = () => {
    const [isAuth, setIsAuth] = useState(false)

    useEffect(() => {
        if(localStorage.getItem('auth')){
            setIsAuth(true)
        }
    }, [])

    return (
            <AuthContext.Provider value ={{
                isAuth,
                setIsAuth
            }}>
                <Router>
                    <Routes>
                        <Route exact path="/menu" element={<Menu />} />
                        <Route exact path="/login" element={<Auth />} />
                        <Route exact path="/registration" element={<Reg />} />

                    </Routes>
                </Router>
            </AuthContext.Provider>
    );
}




