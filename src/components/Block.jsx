import React from 'react';
import trash from '../resources/img/trash.png';
import image from '../resources/img/pizza.jpg';
import CounterButton from "./CounterButton";

const Block = (props) => {

    console.log(props);

    const getSize = () => {

    };

    return (
        <>
            <div className="block">
                <img src={props.obj.obj.pictureURL} width="150" height="100" alt="Пример"/>
                <div className="namesize">
                    <p className="product-name">{ props.obj.obj.name }</p>
                    <p className="costCart">{getSize}</p>
                    {/*<p className="costCart">3</p>*/}
                </div>
                <CounterButton/>
                {/*<p className="priseonshopcart">{*/}
                {/*    props.obj.dishSizeModels.map((post) =>*/}
                {/*        <div>*/}
                {/*            {post.price}  </div> )*/}
                {/*}</p>*/}
                <p className="priseonshopcart">3</p>
                <img src={trash} width="20" height="20" align="left"/>
            </div>
            <hr style ={{borderTop: "2px solid black",  width: '560px', marginLeft: '190px'}} />
        </>
    );
};

export default Block;
