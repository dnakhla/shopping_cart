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
    if (basket.appliedDiscount) {
      return <td colSpan="2">Total: <strike>£{basket.total}</strike>, £{basket.discountedTotal} with discount</td>
    }
    return <td colSpan="2">Total: £{basket.total}</td>
  }
}
