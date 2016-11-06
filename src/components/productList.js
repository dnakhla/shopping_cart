import React from "react";
import {connect} from 'react-redux'

/**
 * Importing methods to be used within component
 */
import {addProduct, calcTotal, applyDiscount} from '../actions/basketActions';
import {loadProducts, reduceStock} from '../actions/productActions';

/**
 * lets component use store
 */

@connect((store) => {
  return {
    products: store.product.products,
    basket: store.basket
  }
})
export default class productList extends React.Component {
  componentDidMount() {
    /**
     * when component mounts, load products
     */
    this.props.dispatch(loadProducts())
  }

  /**
   *  Add product to basket from product list
   * @param product {object} product object which was clicked on
   */
  addToBasket(product) {
    this.props.dispatch(addProduct(product)) // add to basket
    this.props.dispatch(reduceStock(product)) // reduce the stock of item
    this.props.dispatch(calcTotal()) // tell basket to re-calc
    this.props.dispatch(applyDiscount()) // fire discount action to update discount
  }

  render() {
    const {products} = this.props; // making products available from state

    const mappedProducts = products.map((product, index) => { // maps out product rows from store
      let buyButton;
      if (product.stock === 0) { // set buyButton
        buyButton = <a class="button item__button button-disabled">Add to Basket</a>
      }  else {
        buyButton = <a class="button item__button" onClick={this.addToBasket.bind(this, {product})}>Add to Basket</a>
      }

      let price; // renders either price or discounted price
      if (product.originalPrice !== product.price) {
        price = <span><strike>£{product.originalPrice}</strike>, £{product.price}</span>
      } else {
        price = <span>£{product.price}</span>
      }

      const backgroundImage = {
        backgroundImage: 'url(' + product.image + ')'
      }

      let stock = 'Sold Out';
      if (product.stock) stock = product.stock + ' in stock';

      return <li class="product__item" key={index}>
        <a onClick={this.addToBasket.bind(this)}>
          <div class="item__image" style={backgroundImage}></div>
        </a>
        {buyButton}
        <div class="item__details">
          <div class="item__name">{product.name}</div>
          <div class="item__cat">{product.cat}</div>
          <div class="item__price">{price}</div>
          <div class="item__stock">{stock}</div>
        </div>
      </li>
    })


    return <div class="product__container">
      <ul class="product__list">
        {mappedProducts}
      </ul>
    </div>
  }
}
