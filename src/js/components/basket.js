import React from "react";
import {connect} from 'react-redux'

import {addProduct} from '../actions/basketActions';
import {loadProducts} from '../actions/loadActions';

@connect((store) => {
  return {
    basket: store.basket.basket
  }
})
export default class productList extends React.Component {
  componentDidMount() {
    console.log('will mount');
    this.props.dispatch(loadProducts())
  }

  removeFromBasket(product) {
    console.log(product)
    // this.props.dispatch(addProduct(product))
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
          <td>
            <button class="btn btn-danger btn-block" type="submit" onClick={this.removeFromBasket.bind(this)}>
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
          <td>Remove</td>
        </tr>
        </thead>
        <tbody>
        {mappedBasket}
        </tbody>
      </table>
    </div>
  }
}
