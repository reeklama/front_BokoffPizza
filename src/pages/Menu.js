import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeadMain from "../components/Head";
import M from "../components/M";

function Menu() {
    return (
        <div className="wrapper">
            <HeadMain />
            <div className="content">
                <M/>
            </div>
        </div>
    );
}

export default Menu;
