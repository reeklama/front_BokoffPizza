import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeadMain from "../components/Head";
import LogForm from "../components/LogForm";

function Auth() {
    return (
        <div className="wrapper">
            <HeadMain />
            <LogForm/>

        </div>
    );
}

export default Auth;
