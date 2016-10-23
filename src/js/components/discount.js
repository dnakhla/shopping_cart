import React from "react";
import {connect} from "react-redux"

import {setVoucher, applyDiscount} from '../actions/basketActions'

@connect((store) => {
  return {
    basket: store.basket
  }
})
export default class Discounts extends React.Component {
  setVoucher(value) {
    this.props.dispatch(setVoucher(value))
    this.props.dispatch(applyDiscount())
  }

  render() {
    const {basket} = this.props;
    let success;
    if (basket.appliedDiscount) {
      success = <p>Discount Applied</p>
    }
    return <tr>
      <td>
        <input type="text" class="" placeholder="Voucher"/>
        {success}
      </td>
      <td>
        <button type="submit" class="btn btn-primary btn-block" onClick={this.setVoucher.bind(this)}>Redeem</button>
      </td>
    </tr>
  }
}
