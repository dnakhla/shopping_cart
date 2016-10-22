import React from "react";
import {loadProducts} from '../actions/productActions';

export default class Total extends React.Component {
  componentDidMount() {
  }

  clear() {
    this.props.dispatch(loadProducts())
  }

  render() {
    return <td>
      <button type="button" class="btn btn-danger" onClick={this.clear.bind(this)}>Clear</button>
    </td>
  }
}
