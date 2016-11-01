import React from "react";
import { connect } from "react-redux"

/**
 * Giving component access to methods
 */
import {resetStock} from '../actions/productActions';
import {clearBasket, calcTotal, applyDiscount} from '../actions/basketActions';

/**
 * make state available to component
 */
@connect(() => {
  return {};
})
export default class Total extends React.Component {
  componentDidMount() {
  }

  /**
   * clear() used to reset total and reset stocks
   */
  clear() {
    this.props.dispatch(resetStock()) // adjust products back to original stock
    this.props.dispatch(clearBasket()) // empty basket
    this.props.dispatch(calcTotal()) // re-calculate total
    this.props.dispatch(applyDiscount()) // re-apply discounts
  }

  render() {
    return <td>
      <button type="button" class="btn btn-danger btn-block" onClick={this.clear.bind(this)}>Clear</button>
    </td>
  }
}
