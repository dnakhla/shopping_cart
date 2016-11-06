import React from 'react';
import {connect} from 'react-redux'

import {toggleBasket} from '../actions/basketActions';

/**
 * Give component access to store
 */
@connect((store) => {
  return {
    basket: store.basket
  }
})
export default class Heading extends React.Component {
  componentDidMount() {
  }

  toggleDrawer() {
    this.props.dispatch(toggleBasket());
  }

  render() {
    const {basket} = this.props; // making products available from state
    const basketLength = basket.basket.length;

    const basketTotal = '£' + basket.discountedTotal;

    return <div class="heading__bar">
      <div class="heading__title">
        <h1>Shopping Cart</h1>
      </div>
      <div class="heading__basket">
        <a class="button button__close" onClick={this.toggleDrawer.bind(this)}>Open Basket</a>
        <div class="heading__summary">{basketLength} item(s) = {basketTotal}</div>
      </div>
    </div>

  }
}