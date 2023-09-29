'use strict';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { IconSwitch } from './engine/Common.js';
import { CardsView } from './engine/CardsView.js'; 
import { ListView } from './engine/ListView.js';
import { ShopCard, ShopItem } from './engine/Store.js';

import logo from './logo.svg';
import './App.css';
//@import url('https://fonts.googleapis.com/icon?family=Material+Icons')

const VIEW_LIST = "view_list";
const VIEW_MODULE = "view_module";

const products = [{
  name: "Nike Metcon 2",
  price: "130",
  color: "red",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg"
}, {
  name: "Nike Metcon 2",
  price: "130",
  color: "green",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg"
}, {
  name: "Nike Metcon 2",
  price: "130",
  color: "blue",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg"
}, {
  name: "Nike Metcon 2",
  price: "130",
  color: "black",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg"
}, {
  name: "Nike free run",
  price: "170",
  color: "black",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg"
}, {
  name: "Nike Metcon 3",
  price: "150",
  color: "green",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg"
}];

const cardsLayout = {
      xs: 12,
      sm: 8,
      md: 6,
      lg: 4
    };
	
class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {state: props.state};
  }
	
//  setState(state) {
//	  this.state = state;
//  }
	
  render() {
    return (
      <div>
        <div className="toolbar">
          <IconSwitch
            icon={VIEW_MODULE}
            onSwitch={() => {
				if (this.state.state === 'false') this.setState({state: 'true'}); else this.setState({state: 'false'});
				console.log("сменился тип вывода", this.state);
		    }}/>
        </div>
        {this.renderLayout(this.state.state === 'false')}
      </div>
    );
  }

  renderLayout(cardView) {
    if (cardView) {
      console.log("  stat", cardView);
      return (
        <CardsView
          layout={this.props.layout}
          cards={this.getShopItems(this.props.products, cardView)} />
      );
    }
    return (<ListView items={this.getShopItems(this.props.products, cardView)} />);
  }

  getShopItems(products, cardView) {
    return products.map(product => {
      let cardProps = {
        title: product.name,
        caption: product.color,
        img: product.img,
        price: `$${product.price}`
      };
      if (cardView) {
        return (
          <ShopCard {...cardProps}/>
        );
      }
      return (<ShopItem {...cardProps}/>)
    });
  }
}

export { App, products, cardsLayout}
