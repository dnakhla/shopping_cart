import React from "react";
import {connect} from "react-redux"

import Total from './total' // Displays total
import Clear from './clear' // Clear button component with methods
import Discounts from './discount' // Contains discount form

/**
 * Giving component access to store
 */
@connect((store) => {
  return {
    basket: store.basket
  }
})
export default class Status extends React.Component {

  render() {
    const {basket} = this.props;
    return <table class="table">
      <tbody>
      <tr>
        <Total price={basket.total}/>
        <Clear />
      </tr>
      <Discounts />
      </tbody>
    </table>
  }
}
