import React from 'react';

const UserInfo = () => {
    return (
        <>
            <div className="infoblock">
                <div className="container_inner3">
                    <p className="font_inner3">Адрес: </p>
                    <input className="field_inner3" type="text" size="30"/>
                </div>
                <div className="container_inner3">
                    <p className="font_inner3">Подъезд: </p>
                    <input className="field_inner3" type="text" size="30"/>
                </div>
                <div className="container_inner3">
                    <p className="font_inner3">Этаж: </p>
                    <input className="field_inner3" type="text" size="30"/>
                </div>
                <div className="container_inner3">
                    <p className="font_inner3">Квартира: </p>
                    <input className="field_inner3" type="text" size="30"/>
                </div>
                <div className="container_inner3">
                    <p className="font_inner3">Номер телефона: </p>
                    <input className="field_inner3" type="text" size="30"/>
                </div>
                <br />  <br />
                <div className="fon_window_center">
                    <button className="button_order">
                        <nobr><b>Оформить заказ 999 ₽</b></nobr>
                    </button>
                </div>
            </div>

        </>
    );
};

export default UserInfo;
