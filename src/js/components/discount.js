import React from "react";
import {connect} from "react-redux"

import {setVoucher, applyDiscount} from '../actions/basketActions'

@connect((store) => {
  return {
    basket: store.basket
  }
})
export default class Discounts extends React.Component {
  setVoucher(e) {
    e.preventDefault();
    this.props.dispatch(applyDiscount())
  }

  handleVoucherChange(e) {
    const value = e.target.value
    this.props.dispatch(setVoucher(value))
  }

  render() {
    const {basket} = this.props;
    let success;
    if (basket.appliedDiscount) {
      success = <p>Discount Applied</p>
    }
    return <tr>
      <form>
        <td>
          <input type="text" class="" name="voucher" placeholder="Voucher" onChange={this.handleVoucherChange.bind(this)}/>
          {success}
        </td>
        <td>
          <button class="btn btn-primary btn-block" onClick={this.setVoucher.bind(this)}>Redeem</button>
        </td>
      </form>
    </tr>
  }
}
