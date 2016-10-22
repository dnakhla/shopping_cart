import React from "react";
import {connect} from 'react-redux'

import {addProduct} from '../actions/basketActions';
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
  }

  render() {
    const {products} = this.props;
    let mappedProducts;
    if (products) {
      mappedProducts = products.map(product => {
        if (product.stock !== 0) {
          return <tr key={product.id}>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>{product.cat}</td>
            <td>{product.stock}</td>
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
            <td>{product.cat}</td>
            <td>{product.stock}</td>
            <td>
              <button class="btn btn-default btn-block" disabled="disabled" type="submit">
                <span class="glyphicon glyphicon-plus" aria-hidden="true"></span>
              </button>
            </td>
          </tr>
        }

      })
    }

    return <div class="col-md-8">
          <table class="table">
            <thead>
            <tr>
              <td>#</td>
              <td>Product</td>
              <td>Category</td>
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
