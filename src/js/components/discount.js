import React from "react";
import {connect} from "react-redux"
/**
 * Import methods to be used in component
 */
import {setVoucher, applyDiscount} from '../actions/basketActions'
/**
 * @connect is stated to five component access to store
 */
@connect((store) => {
  return {
    basket: store.basket
  }
})
export default class Discounts extends React.Component {
  /**
   * Sets voucher value on the total
   * @param e {object} event of submit button
   */
  setVoucher(e) {
    e.preventDefault(); // stop page from reloading
    this.props.dispatch(applyDiscount())
  }

  /**
   * Sets the voucher value in state on change of input box
   * @param e {object} event of change from input
   */
  handleVoucherChange(e) {
    const value = e.target.value
    this.props.dispatch(setVoucher(value))
  }

  render() {
    const {basket} = this.props;
    let valid = 'input-group'; // success value to be applied dependent on appliedDiscount

    // Setting class for input form
    if (basket.appliedDiscount === 0) {
      valid = 'input-group'
    } else if (basket.appliedDiscount === 1) {
      valid = 'input-group has-error'
    } else if (basket.appliedDiscount === 2) {
      valid = 'input-group has-success'
    }

    return <tr>
      <td colSpan="2">
        <form class={valid} style={{display: 'flex'}}>
          <input type="text" class="form-control" style={{padding: '10px'}} name="voucher" placeholder="Voucher" onChange={this.handleVoucherChange.bind(this)} aria-describedby="basic-addon2"/>
          <button class="btn btn-primary input-group-addon" onClick={this.setVoucher.bind(this)} id="basic-addon2" style={{width: 'auto'}}>Redeem</button>
        </form>
      </td>
    </tr>
  }
}
