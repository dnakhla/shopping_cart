import React from "react";
import {connect} from 'react-redux'

import Status from './status' // Status Component - contains total and dscounts

/**
 * Importing methods to be used within component
 */
import {removeProduct, calcTotal, loadDiscounts, applyDiscount, toggleBasket} from '../actions/basketActions';
import {addStock} from '../actions/productActions';

/**
 * Give component access to store
 */
@connect((store) => {
  return {
    basket: store.basket
  }
})
export default class basket extends React.Component {
  /**
   * when component mounts - load discounts
   */
  componentDidMount() {
    this.props.dispatch(loadDiscounts())
  }

  /**
   * Remove item from basket
   * @param product {object} product object which was clicked
   */
  removeFromBasket(product) {
    this.props.dispatch(removeProduct(product)) // removed product from basket
    this.props.dispatch(addStock(product)) // adds stock count back to product list
    this.props.dispatch(calcTotal()) // calculate total of basket
    this.props.dispatch(applyDiscount()) // re-apply discounts
  }

  toggleDrawer() {
    this.props.dispatch(toggleBasket());
  }

  render() {
    const {basket} = this.props; // init basket from state
    let mappedBasket
    if (basket) {
      mappedBasket = basket.basket.map(product => {
        return <li key={product.id} class="basket__item" >
          <div class="name">{product.name}</div>
          <div>{product.quantity}</div>
          <div>
            <button class="button" type="submit" onClick={this.removeFromBasket.bind(this, {product})}>
              -
            </button>
          </div>
        </li>
      })
    }

    let basketClass = 'basket__container';
    if (basket.open) {
      basketClass += ' basket__container-open';
    }

    return <div class={basketClass}>
      <h3>Basket</h3> <button class="button button__close" onClick={this.toggleDrawer.bind(this)}>Close</button>
      <ul class="basket__list">
        {mappedBasket}
      </ul>
      <Status />
    </div>
  }
}
