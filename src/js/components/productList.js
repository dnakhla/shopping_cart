import React from "react";
import {connect} from 'react-redux'

import {addProduct, calcTotal, applyDiscount} from '../actions/basketActions';
import {loadProducts, reduceStock} from '../actions/productActions';

@connect((store) => {
  return {
    products: store.product.products
  }
})
export default class productList extends React.Component {
  componentDidMount() {
    this.props.dispatch(loadProducts())
  }

  addToBasket(product) {
    this.props.dispatch(addProduct(product))
    this.props.dispatch(reduceStock(product))
    this.props.dispatch(calcTotal())
    this.props.dispatch(applyDiscount())
  }

  render() {
    const {products} = this.props;

    const mappedProducts = products.map(product => {
      let button;
      if (product.stock === 0) {
        button = <button class="btn btn-default btn-block" disabled="disabled" type="submit">
          <span class="glyphicon glyphicon-plus" aria-hidden="true"></span>
        </button>
      } else {
        button = <button class="btn btn-default btn-block" type="submit" onClick={this.addToBasket.bind(this, {product})}>
          <span class="glyphicon glyphicon-plus" aria-hidden="true"></span>
        </button>
      }
      let price;
      if (product.originalPrice !== product.price) {
        price = <td><strike>£{product.originalPrice}</strike>, £{product.price} </td>
      } else {
        price = <td>£{product.price}</td>
      }
      return <tr key={product.id}>
        <td>{product.name}</td>
        <td>{product.cat}</td>
        {price}
        <td>{product.stock}</td>
        <td>
          {button}
        </td>
      </tr>
    })


    return <div class="col-md-8">
          <table class="table">
            <thead>
            <tr>
              <td>Product</td>
              <td>Category</td>
              <td>Price</td>
              <td>Quantity</td>
              <td><span class="glyphicon glyphicon-shopping-cart" aria-hidden="true"></span></td>
            </tr>
            </thead>
            <tbody>
            {mappedProducts}
            </tbody>
          </table>
        </div>
  }
}
