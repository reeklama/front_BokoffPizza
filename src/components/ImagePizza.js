import React from 'react';
import image from '../resources/img/pizza.jpg';
import '../style/userpage.css';
//import '../js/jq';

const ImagePizza = (props) => {
    return (
        <div className="data">
            <div className="span2">
                <img src={props.obj.pictureURL} width="695" height="704" align="left"/>
            </div>
            <div className="countadd">
                <div className="span3">
                    <p className="name">Вкусный пицц </p>
                    <br/> <br/>
                    <p className="cost">₽ 600 </p>
                    <br/> <br/> <br/> <br/>
                    <ul>
                        <a href="">
                            <input type="radio" name="radio" id="radio1" checked/>
                            <label htmlFor="radio1">23 см</label>
                        </a>
                        <a href="">
                            <input type="radio" name="radio" id="radio2"/>
                            <label htmlFor="radio2">30 см</label>
                        </a>
                        <a href="">
                            <input type="radio" name="radio" id="radio3"/>
                            <label htmlFor="radio3">36 см</label>
                        </a>
                    </ul>
                    <br/> <br/> <br/>
                    <div className="outer">
                        <div className="countadd">
                            <div className="span5">
                                <div className="number" data-step="1" data-min="1" data-max="100">
                                    <input className="number-text" type="text" name="count" value="1"/>
                                    <a href="#" className="number-minus">−</a>
                                    <a href="#" className="number-plus">+</a>
                                </div>
                            </div>
                            <div className="fon_window_center">
                                <button className="button_add">
                                    <nobr><b>Добавить в корзину</b></nobr>
                                </button>
                            </div>
                        </div>
                        <div className="span4">
                            <p className="detailed">ПОДРОБНАЯ ИНФОРМАЦИЯ </p>
                            <br/>
                            <p className="info">Очень вкусно соус сыр колбаса оливки зачем-то а так в целом нелохо покупайте </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImagePizza;
