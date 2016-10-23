import React from "react";
import {connect} from 'react-redux'

import Status from './status' // Status Component - contains total and dscounts

/**
 * Importing methods to be used within component
 */
import {removeProduct, calcTotal, loadDiscounts, applyDiscount} from '../actions/basketActions';
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

  render() {
    const {basket} = this.props; // init basket from state
    let mappedBasket
    if (basket) {
      mappedBasket = basket.basket.map(product => {
        return <tr key={product.id}>
          <td>{product.name}</td>
          <td>{product.quantity}</td>
          <td>
            <button class="btn btn-danger btn-block btn-block" type="submit" onClick={this.removeFromBasket.bind(this, {product})}>
              <span class="glyphicon glyphicon-minus" aria-hidden="true"></span>
            </button>
          </td>
        </tr>
      })
    }

    return <div class="col-md-4">
      <h3>Basket</h3>
      <table class="table">
        <thead>
        <tr>
          <td>Item</td>
          <td>Quantity</td>
          <td>Remove</td>
        </tr>
        </thead>
        <tbody>
          {mappedBasket}
        </tbody>
      </table>
      <Status />
    </div>
  }
}
