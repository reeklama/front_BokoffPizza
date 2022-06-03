import React from 'react';
import {Link} from "react-router-dom";
import userCab from "../resources/img/user.svg";
import admin from "../resources/img/admin.png";
import systemAdmin from "../resources/img/system_admin.png";


const ToAdminBlock = () => {
    let token = localStorage.getItem('token')
    function parseJwt (token) {
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));

        return JSON.parse(jsonPayload);
    }

    let jsonJWT = parseJwt(token)
    console.log(jsonJWT)

    function hasSystemAdminPrivileges() {
        let jsonJWT = parseJwt(token)
        return jsonJWT.roles.includes('ROLE_SYSADMIN')
    }
    function hasEngineeringPrivileges() {
        let jsonJWT = parseJwt(token)
        return jsonJWT.roles.includes('ROLE_MODERATOR')
    }
    return (
        <div className="admins-container">
            {hasSystemAdminPrivileges(parseJwt(token)) &&
                <Link to="/sysadmin" className="userpage-link">
                    <img src={systemAdmin} width="65" height="65" alt=""/>
                    <div className="admin-text">
                        Войти как системный администратор
                    </div>
                </Link>

            }
            {hasEngineeringPrivileges(parseJwt(token)) &&
                <Link to="/admin" className="userpage-link">
                    <img src={admin} width="65" height="65" alt=""/>
                    <div className="admin-text">
                        <p>Войти как прикладной администратор</p>
                    </div>
                </Link>

            }
        </div>
    );
};

export default ToAdminBlock;