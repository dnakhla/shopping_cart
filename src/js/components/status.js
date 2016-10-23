import React from "react";
import {connect} from "react-redux"

import Total from './total'
import Clear from './clear'
import Discounts from './discount'

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
