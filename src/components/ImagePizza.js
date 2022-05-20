import React from 'react';
import '../style/userpage.css';
import CounterButton from "./CounterButton";
import SizePizzaDishPage from "./SizePizzaDishPage";


const ImagePizza = (props) => {

    console.log(props.obj);

    function getPrice(size) {
        return props.obj.dishSizeModels.map((item) =>
            <div>
                {item.size} см : {item.price} ₽
            </div>)
    }
    return (
        <div className="data">
            <div className="span2">
                {<img src={props.obj.pictureURL} width="600" height="400" align="left"/>}
            </div>
            <div className="countadd">
                <div className="span3">
                    {<p className="name">{props.obj.name}</p>}
                    <br/> <br/>
                    <p className="cost">
                        {getPrice(props.size)}

                    </p>
                    <br/> <br/> <br/> <br/>
                    <SizePizzaDishPage/>
                    <br/> <br/> <br/>
                    <div className="outer">
                        <div className="countadd">
                            <div className="span5">
                                <CounterButton/>
                            </div>
                            <div className="fon_window_center">
                                <button className="button_add">
                                    <nobr><b>Добавить в корзину</b></nobr>
                                </button>
                            </div>
                        </div>
                        <br/> <br/>
                        <div className="span4">
                            <p className="detailed">ПОДРОБНАЯ ИНФОРМАЦИЯ </p>
                            <br/>
                            <p className="info"> {
                                props.obj.products.map((post) =>
                                    <div>
                                        {post.name}  </div> )
                            }</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImagePizza;
