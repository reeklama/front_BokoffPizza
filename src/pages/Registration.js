import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeadMain from "../components/Head";
import RegForm from "../components/RegForm";

function Registration() {

    return (
        <div className="wrapper">
            <HeadMain />
            <RegForm />
        </div>
    );
}

export default Registration;
