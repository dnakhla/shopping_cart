import React from 'react';
import {connect} from 'react-redux'

import {addProduct} from '../actions/basketActions';
import {loadProducts} from '../actions/loadActions';
@connect((store) => {
  return {
    products: store.load.load,
    basket: store.basket.basket,
  }
})
export default class Layout extends React.Component {
  componentDidMount() {
    console.log('will mount');
    this.props.dispatch(loadProducts())
  }

  addToBasket(product) {
    this.props.dispatch(addProduct(product))
  }

  removeFromBasket(product) {
    console.log(product)
    // this.props.dispatch(addProduct(product))
  }

  render() {
    const {products, basket} = this.props;
    console.log(basket);
    let mappedProducts;
    if (products) {
      mappedProducts = products.map(product => {
        if (product.quantity !== 0) {
          return <tr key={product.id}>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>{product.quantity}</td>
            <td>
              <button class="btn btn-default btn-block" type="submit" onClick={this.addToBasket.bind(this, {product})}>
                <span class="glyphicon glyphicon-plus" aria-hidden="true"></span>
              </button>
            </td>
          </tr>
        } else {
          return <tr key={product.id}>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>{product.quantity}</td>
            <td>
              <button class="btn btn-default btn-block" disabled="disabled" type="submit">
                <span class="glyphicon glyphicon-plus" aria-hidden="true"></span>
              </button>
            </td>
          </tr>
        }

      })
    }

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
    return <div class="container">
      <div class="row">
        <div class="page-header">
          <h1>Shopping Cart <span class="glyphicon glyphicon-shopping-cart btn-lg" aria-hidden="true"></span></h1>
        </div>
      </div>
      <div class="row">
        <div class="col-md-8">
          <table class="table">
            <thead>
            <tr>
              <td>#</td>
              <td>Product</td>
              <td>Quantity</td>
              <td><span class="glyphicon glyphicon-shopping-cart" aria-hidden="true"></span></td>
            </tr>
            </thead>
            <tbody>
            {mappedProducts}
            </tbody>
          </table>
        </div>
        <div class="col-md-4">
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
      </div>

    </div>
  }
}