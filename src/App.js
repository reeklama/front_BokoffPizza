import React from 'react';
import './style/App.css';
import './style/userpage.css';
import './style/listpage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu  from "./pages/Menu";
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';


export const App = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route exact path="/menu" element={<Menu />} />
                </Routes>
            </Router>
        </>
    );
}




