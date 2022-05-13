import React from 'react';
import logo from "../resources/img/logo.png";
import Image from "./Image";
import Button from "./Button";
import MPizzaBlock from "./MPizzaBlock";
import axios from "axios";

const M = () => {

    let theArray = []

    useEffect(() => {
        axios
            .get(`/menu`)
            .then(res => {
                const newItem = {
                    id: res.data.id,
                    name: res.data.name,
                    pictureURL: res.data.url,
                    products: res.data.products,
                    dishSizes: res.data.dishSizes[]
                };
                theArray.push(newItem);
            })
    }, [])

    const data = [{
        "id": 1,
        "name": "Mexicana",
        "pictureURL": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Kotipizza_Mexicana.jpg/800px-Kotipizza_Mexicana.jpg",
        "products": [],
        "dishSizes": [{"id": 1, "dish": 1, "unit": "см", "size": 40, "price": 990}]
    },
        {
            "id": 1,
            "name": "Mexicana",
            "pictureURL": "https://en.wikipedia.org/wiki/File:Kotipizza_Mexicana.jpg",
            "products": [],
            "dishSizes": [{"id": 1, "dish": 1, "unit": "см", "size": 40, "price": 990}]
        },
        {
            "id": 1,
            "name": "Mexicana",
            "pictureURL": "https://en.wikipedia.org/wiki/File:Kotipizza_Mexicana.jpg",
            "products": [],
            "dishSizes": [{"id": 1, "dish": 1, "unit": "см", "size": 40, "price": 990}]
        },
        {
            "id": 1,
            "name": "Mexicana",
            "pictureURL": "https://en.wikipedia.org/wiki/File:Kotipizza_Mexicana.jpg",
            "products": [],
            "dishSizes": [{"id": 1, "dish": 1, "unit": "см", "size": 40, "price": 990}]
        },
        {
            "id": 1,
            "name": "Mexicana",
            "pictureURL": "https://en.wikipedia.org/wiki/File:Kotipizza_Mexicana.jpg",
            "products": [],
            "dishSizes": [{"id": 1, "dish": 1, "unit": "см", "size": 40, "price": 990}]
        },
        {
            "id": 1,
            "name": "Mexicana",
            "pictureURL": "https://en.wikipedia.org/wiki/File:Kotipizza_Mexicana.jpg",
            "products": [],
            "dishSizes": [{"id": 1, "dish": 1, "unit": "см", "size": 40, "price": 990}]
        },
        {
            "id": 1,
            "name": "Mexicana",
            "pictureURL": "https://en.wikipedia.org/wiki/File:Kotipizza_Mexicana.jpg",
            "products": [],
            "dishSizes": [{"id": 1, "dish": 1, "unit": "см", "size": 40, "price": 990}]
        },
        {
            "id": 1,
            "name": "Mexicana",
            "pictureURL": "https://en.wikipedia.org/wiki/File:Kotipizza_Mexicana.jpg",
            "products": [],
            "dishSizes": [{"id": 1, "dish": 1, "unit": "см", "size": 40, "price": 990}]
        },
        {
            "id": 1,
            "name": "Mexicana",
            "pictureURL": "https://en.wikipedia.org/wiki/File:Kotipizza_Mexicana.jpg",
            "products": [],
            "dishSizes": [{"id": 1, "dish": 1, "unit": "см", "size": 40, "price": 990}]
        }]



    const template = Object.keys(data.pizza).map(item => <span key={data.pizza[item].id}>{data.pizza[item].name} -
        {data.pizza[item].pictureURL} - {data.pizza[item].products} - {data.pizza[item].dishSizes} </span>)


    const carNode = () => {
        return (
            <tr>
                <th scope="row">{data[0].name}</th>
                <p className="author">{data[0].id} </p>
            </tr>
        )
    };


    const handleAddPizzaToCart = (obj) => {

    };

    return (

        <div>

            <div>{carNode()}</div>

            <section className="search">
                <h3 className="search_h">Поиск: </h3>
                <input type="search" className="search_line" placeholder="Введите название блюда или ингредиент"/>
            </section>


            <section className="products">

                <MPizzaBlock id='1' name="Mexicana" pictureURL="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Kotipizza_Mexicana.jpg/800px-Kotipizza_Mexicana.jpg"
                             price="900" types="Big" sizes="bigbig" onClickAddPizza={handleAddPizzaToCart} count='0'/>
                <MPizzaBlock id='1' name="Mexicana" pictureURL="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Kotipizza_Mexicana.jpg/800px-Kotipizza_Mexicana.jpg"
                             price="900" types="Big" sizes="bigbig" onClickAddPizza={handleAddPizzaToCart} count='0' />
                <MPizzaBlock id='1' name="Mexicana" pictureURL="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Kotipizza_Mexicana.jpg/800px-Kotipizza_Mexicana.jpg"
                             price="900" types="Big" sizes="bigbig" onClickAddPizza={handleAddPizzaToCart} count='0' />
                <MPizzaBlock id='1' name="Mexicana" pictureURL="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Kotipizza_Mexicana.jpg/800px-Kotipizza_Mexicana.jpg"
                             price="900" types="Big" sizes="bigbig" onClickAddPizza={handleAddPizzaToCart} count='0' />
                <MPizzaBlock id='1' name="Mexicana" pictureURL="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Kotipizza_Mexicana.jpg/800px-Kotipizza_Mexicana.jpg"
                             price="900" types="Big" sizes="bigbig" onClickAddPizza={handleAddPizzaToCart} count='0' />
                <MPizzaBlock id='1' name="Mexicana" pictureURL="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Kotipizza_Mexicana.jpg/800px-Kotipizza_Mexicana.jpg"
                             price="900" types="Big" sizes="bigbig" onClickAddPizza={handleAddPizzaToCart} count='0'/>
                <MPizzaBlock id='1' name="Mexicana" pictureURL="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Kotipizza_Mexicana.jpg/800px-Kotipizza_Mexicana.jpg"
                             price="900" types="Big" sizes="bigbig" onClickAddPizza={handleAddPizzaToCart} count='0'/>
                <MPizzaBlock id='1' name="Mexicana" pictureURL="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Kotipizza_Mexicana.jpg/800px-Kotipizza_Mexicana.jpg"
                             price="900" types="Big" sizes="bigbig" onClickAddPizza={handleAddPizzaToCart} count='0'/>
                <MPizzaBlock id='1' name="Mexicana" pictureURL="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Kotipizza_Mexicana.jpg/800px-Kotipizza_Mexicana.jpg"
                             price="900" types="Big" sizes="bigbig" onClickAddPizza={handleAddPizzaToCart} count='0'/>

            </section>

        </div>
    );
};

export default M;