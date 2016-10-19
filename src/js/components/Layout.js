import React from 'react';
import { connect } from 'react-redux'

import { addProduct } from '../actions/basketActions';
@connect((store) => {
  return {
    id: '1',
    user: 'brace'
  }
})
export default class Layout extends React.Component {
  componentWillMount() {
    console.log('will mount');
  }

  addUser() {
    console.log('aup');
    this.props.dispatch(addProduct())
  }

  render() {
    return <div>
      <h1>Aup</h1>
      <button onClick={this.addUser.bind(this)}>Add User</button>
    </div>
  }
}