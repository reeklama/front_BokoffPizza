import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Categories from '../components/Categories';
import SortPopup from '../components/SortPopup';
import PizzaBlock from '../components/PizzaBlock/PizzaBlock';
import PizzaLoadingBlock from '../components/PizzaBlock/LoadingBlock';



import { setCategory, setSortBy } from '../redux/actions/filters';
import { fetchPizzas } from '../redux/actions/pizzas';
import { addPizzaToCart } from '../redux/actions/cart';
import HeadMain from "../components/Head";
import M from "../components/M";

function Home() {

  return (
      <div className="wrapper">
            <HeadMain />

        <div className="content">
            <M/>

        </div>
      </div>
  );
}

export default Home;
