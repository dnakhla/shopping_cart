import React from "react";
import {connect} from 'react-redux'

import Total from './total'
import Clear from './clear'

import {removeProduct} from '../actions/basketActions';
import {addStock} from '../actions/productActions';

@connect((store) => {
  return {
    basket: store.basket.basket
  }
})
export default class productList extends React.Component {
  componentDidMount() {
  }

  removeFromBasket(product) {
    this.props.dispatch(removeProduct(product))
    this.props.dispatch(addStock(product))

  }

  addToBasket(product) {
    this.props.dispatch(addProduct(product))
  }

  render() {
    const {basket} = this.props;
    let mappedBasket
    if (basket) {
      mappedBasket = basket.map(product => {
        return <tr key={product.id}>
          <td>{product.name}</td>
          <td>{product.quantity}</td>
          <td>
            <button class="btn btn-danger btn-block" type="submit" onClick={this.removeFromBasket.bind(this, {product})}>
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
        <tfoot>
          <tr>
            <Total />
            <Clear />
          </tr>
        </tfoot>
      </table>
    </div>
  }
}
