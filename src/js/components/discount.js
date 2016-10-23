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
      <td colSpan="2">
        <form class="input-group" style={{display: 'flex'}}>
          <input type="text" class="" name="voucher" placeholder="Voucher" onChange={this.handleVoucherChange.bind(this)} aria-describedby="basic-addon2"/>
          <button class="btn btn-primary input-group-addon" onClick={this.setVoucher.bind(this)} id="basic-addon2" style={{width: 'auto'}}>Redeem</button>
        </form>
      </td>
    </tr>
  }
}
