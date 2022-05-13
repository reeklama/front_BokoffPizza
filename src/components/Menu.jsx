import React from 'react';
import axios from "axios";


export default class Menu  extends React.Component {
    state = {
        products: []
    };


    componentDidMount() {
        //axios.get(`https://localhost:8080/menu`)
            //.then(res => {
                const res = {"id":1,"name":"Mexicana","pictureURL":"https://en.wikipedia.org/wiki/File:Kotipizza_Mexicana.jpg","products":[],"dishSizes":[{"id":1,"dish":1,"unit":"см","size":40,"price":990}]}
                const products = res.data;
                this.setState({ products });
            //})
    }



    render() {
        return (
            <div className="list-content">
                <section className="search">
                    <h3 className="search_h">Поиск: </h3>
                    <input type="search" className="search_line" placeholder="Введите название блюда или ингридиент"/>
                </section>
                <section className="products">
                    <div className="product">
                        <div className="picture-product">
                        </div>
                        <p className="product-name">{this.state.products.price}</p>
                        <div className="add-to-purchase">
                            <bcdutton className="add-to-purchase-btn">Добавить в корзину</bcdutton>
                            <p className="price">0 рублей</p>
                        </div>
                    </div>
                    <div className="product">
                        <div className="picture-product">
                        </div>
                        <p className="product-name">Пицца Pizza</p>
                        <div className="add-to-purchase">
                            <button className="add-to-purchase-btn">Добавить в корзину</button>
                            <p className="price">0 рублей</p>
                        </div>
                    </div>
                    <div className="product">
                        <div className="picture-product">
                        </div>
                        <p className="product-name">Пицца Pizza</p>
                        <div className="add-to-purchase">
                            <button className="add-to-purchase-btn">Добавить в корзину</button>
                            <p className="price">0 рублей</p>
                        </div>
                    </div>
                    <div className="product">
                        <div className="picture-product">
                        </div>
                        <p className="product-name">Пицца Pizza</p>
                        <div className="add-to-purchase">
                            <button className="add-to-purchase-btn">Добавить в корзину</button>
                            <p className="price">0 рублей</p>
                        </div>
                    </div>
                    <div className="product">
                        <div className="picture-product">
                        </div>
                        <p className="product-name">Пицца Pizza</p>
                        <div className="add-to-purchase">
                            <button className="add-to-purchase-btn">Добавить в корзину</button>
                            <p className="price">0 рублей</p>
                        </div>
                    </div>
                    <div className="product">
                        <div className="picture-product">
                        </div>
                        <p className="product-name">Пицца Pizza</p>
                        <div className="add-to-purchase">
                            <button className="add-to-purchase-btn">Добавить в корзину</button>
                            <p className="price">0 рублей</p>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
};

