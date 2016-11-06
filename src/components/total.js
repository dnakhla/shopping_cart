import React from "react"
import {connect} from "react-redux"

@connect((store) => {
  return {
    basket: store.basket
  }
})
export default class Total extends React.Component {
  componentDidMount() {
  }

  render() {
    const {basket} = this.props;
    if (basket.appliedDiscount === 2 ) {
      return <span class="total">Total: <strike>£{basket.total}</strike>, £{basket.discountedTotal} with discount</span>
    }
    return <span class="total">Total: £{basket.total}</span>
  }
}
