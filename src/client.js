import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux' // Redux

import Layout from './components/Layout'
import store from './store'

import './styles/base.scss';

const app = document.getElementById('app'); // injects app into app div

/**
 * Base for application
 * Layout is wrapped with Provider to give each component the option to use store (@connect)
 *
 */
ReactDOM.render(<Provider store={store}>
    <Layout/>
  </Provider>, app);