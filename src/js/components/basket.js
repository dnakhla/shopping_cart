import React from "react";
import {connect} from 'react-redux'

import Status from './status'

import {removeProduct, calcTotal, loadDiscounts, applyDiscount} from '../actions/basketActions';
import {addStock} from '../actions/productActions';
@connect((store) => {
  return {
    basket: store.basket
  }
})
export default class basket extends React.Component {
  componentDidMount() {
    this.props.dispatch(loadDiscounts())
  }
  removeFromBasket(product) {
    this.props.dispatch(removeProduct(product))
    this.props.dispatch(addStock(product))
    this.props.dispatch(calcTotal())
    this.props.dispatch(applyDiscount())
  }

  render() {
    const {basket} = this.props;
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
