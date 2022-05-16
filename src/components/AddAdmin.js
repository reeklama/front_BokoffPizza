import React from 'react';
import '../style/Admin.css';

const AddAdmin = () => {
    return (
        <>
            <div class="rectangle">
                Добавление администратора
                <div className="container_inner4">
                    <p className="font_inner4"></p>
                    <input className="field_inner4" type="text" size="10"  placeholder="Почта"/>
                </div>
                <button className="addButton">Добавить</button>
            </div>
        </>

    );
};

export default AddAdmin;