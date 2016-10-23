import React from "react";
import {connect} from 'react-redux'

/**
 * Importing methods to be used within component
 */
import {addProduct, calcTotal, applyDiscount} from '../actions/basketActions';
import {loadProducts, reduceStock} from '../actions/productActions';
/**
 * lets component use store
 */
@connect((store) => {
  return {
    products: store.product.products
  }
})
export default class productList extends React.Component {
  componentDidMount() {
    /**
     * when component mounts, load products
     */
    this.props.dispatch(loadProducts())
  }

  /**
   *  Add product to basket from product list
   * @param product {object} product object which was clicked on
   */
  addToBasket(product) {
    this.props.dispatch(addProduct(product)) // add to basket
    this.props.dispatch(reduceStock(product)) // reduce the stock of item
    this.props.dispatch(calcTotal()) // tell basket to re-calc
    this.props.dispatch(applyDiscount()) // fire discount action to update discount
  }

  render() {
    const {products} = this.props; // making products available from state

    const mappedProducts = products.map(product => { // maps out product rows from store
      let disabled;
      if (product.stock === 0) { // set disabled
        disabled = 'disabled'
      }
      let price; // renders either price or discounted price
      if (product.originalPrice !== product.price) {
        price = <td><strike>£{product.originalPrice}</strike>, £{product.price} </td>
      } else {
        price = <td>£{product.price}</td>
      }
      return <tr key={product.id}>
        <td>{product.name}</td>
        <td>{product.cat}</td>
        {price}
        <td>{product.stock}</td>
        <td>
          <button class="btn btn-default btn-block" type="submit" disabled={disabled} onClick={this.addToBasket.bind(this, {product})}>
            <span class="glyphicon glyphicon-plus" aria-hidden="true"></span>
          </button>
        </td>
      </tr>
    })


    return <div class="col-md-8">
          <table class="table table-responsive">
            <thead>
            <tr>
              <td>Product</td>
              <td>Category</td>
              <td>Price</td>
              <td>Quantity</td>
              <td><span class="glyphicon glyphicon-shopping-cart" aria-hidden="true"></span></td>
            </tr>
            </thead>
            <tbody>
            {mappedProducts}
            </tbody>
          </table>
        </div>
  }
}
