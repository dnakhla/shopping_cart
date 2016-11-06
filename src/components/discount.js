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
    e.preventDefault();
    const value = e.target.value
    this.props.dispatch(setVoucher(value))
  }

  render() {
    const {basket} = this.props;
    let valid = 'discount__form'; // success value to be applied dependent on appliedDiscount

    // Setting class for input form
    if (basket.appliedDiscount === 0) {
      valid = 'discount__form'
    } else if (basket.appliedDiscount === 1) {
      valid = 'discount__form discount__form-error'
    } else if (basket.appliedDiscount === 2) {
      valid = 'discount__form discount__form-success'
    }

    return <div class="discount">
        <form class={valid}>
          <input type="text" class="discount__input" name="voucher" placeholder="Voucher" onChange={this.handleVoucherChange.bind(this)} aria-describedby="basic-addon2"/>
          <a class="button discount__button" onClick={this.setVoucher.bind(this)} id="basic-addon2" style={{width: 'auto'}}>Redeem</a>
        </form>
      </div>
  }
}
