import React from 'react';
import cl from './Loader.module.css';

const Loader = () => {
    return (
        <div>
            <div className={cl.loader}></div>
            <p>Идет загрузка...</p>
        </div>
    );
};

export default Loader;