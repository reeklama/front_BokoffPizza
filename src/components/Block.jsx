import React from 'react';
import trash from '../resources/img/trash.png';
import image from '../resources/img/pizza.jpg';
import '../style/userpage.css';

const Block   = (props) => {

    return (
        <>
            <div className="block">
                <img src={image} width="117" height="121" alt="Пример"/>
                <p className="product-name">Сосиска в тесте</p>

                {/*<ul>*/}
                {/*    <a href="">*/}
                {/*        <input type="radio" name="radio" id="radio1" checked/>*/}
                {/*        <label2 htmlFor="radio1">23 см</label2>*/}
                {/*    </a>*/}
                {/*    <a href="">*/}
                {/*        <input type="radio" name="radio" id="radio2"/>*/}
                {/*        <label2 htmlFor="radio2">30 см</label2>*/}
                {/*    </a>*/}
                {/*    <a href="">*/}
                {/*        <input type="radio" name="radio" id="radio3"/>*/}
                {/*        <label2 htmlFor="radio3">36 см</label2>*/}
                {/*    </a>*/}
                {/*</ul>*/}
                <div className="number" data-step="1" data-min="1" data-max="100">
                    <input className="number-text" type="text" name="count" value="1"/>
                    <a href="#" className="number-minus">−</a>
                    <a href="#" className="number-plus">+</a>
                </div>
                <p className="priseonshopcart">0 ₽</p>
                <a href="sample.html"><img src={trash} width="20" height="20" align="left"/></a>
            </div>
            <hr  width="550px" color="black" />
        </>
    );
};

export default Block;
