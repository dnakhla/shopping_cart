import React from 'react';

import Basket from './basket'
import ProductList from './productList'

export default class Layout extends React.Component {
  componentDidMount() {
    console.log('Layout mount');
  }

  render() {
    return <div class="container">
      <div class="row">
        <div class="page-header">
          <h1>Shopping Cart <span class="glyphicon glyphicon-shopping-cart btn-lg" aria-hidden="true"></span></h1>
        </div>
      </div>
      <div class="row">
        <ProductList />
        <Basket />
      </div>

    </div>
  }
}