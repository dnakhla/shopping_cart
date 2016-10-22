import React from "react";
import {connect} from "react-redux"

import {setVoucher, applyDiscount} from '../actions/basketActions'

@connect((store) => {
  return {}
})
export default class Discounts extends React.Component {
  setVoucher(value) {
    this.props.dispatch(setVoucher(value))
    this.props.dispatch(applyDiscount())
  }

  render() {
    return <tr>
      <td>
        <input type="text" class="" placeholder="Voucher"/>
      </td>
      <td>
        <button type="submit" class="btn btn-primary btn-block" onClick={this.setVoucher.bind(this)}>Redeem</button>
      </td>
    </tr>
  }
}
