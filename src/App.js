import React from 'react';
import './style/App.css';
import './style/userpage.css';
import './style/listpage.css';

import logo from './resources/img/logo.png';
import user from './resources/img/user.svg';
import Menu from "./components/Menu";
import axios from "axios";
import M from "./components/M";

import HeadMain from "./components/Head"
import { Home, Cart } from './pages';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

function App() {

    return (

        <div className="wrapper">
            <HeadMain />

            <div className="content">
                <M/>

            </div>
        </div>

    );
}

export default App;



