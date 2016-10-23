import React from "react";
import { connect } from "react-redux"

import {resetStock} from '../actions/productActions';
import {clearBasket, calcTotal, applyDiscount} from '../actions/basketActions';

@connect(() => {
  return {};
})
export default class Total extends React.Component {
  componentDidMount() {
  }

  clear() {
    this.props.dispatch(resetStock())
    this.props.dispatch(clearBasket())
    this.props.dispatch(calcTotal())
    this.props.dispatch(applyDiscount())
  }

  render() {
    return <td>
      <button type="button" class="btn btn-danger btn-block" onClick={this.clear.bind(this)}>Clear</button>
    </td>
  }
}
