import React from 'react';

import Heading from './heading'
import Basket from './basket'
import ProductList from './productList'

export default class Layout extends React.Component {
  componentDidMount() {
  }

  render() {
    return <div class="page">
      <div class="page__head">
        <Heading />
      </div>
      <div class="page__body">
        <ProductList />
        <Basket />
      </div>
  </div>
  }
}