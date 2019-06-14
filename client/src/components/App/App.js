import React, { Component } from 'react';

import Header from '../Header/Header';
import ProductList from '../ProductList/ProductList';
import ProductPage from '../ProductPage/ProductPage';

import { fetchProducts } from '../../services/catalog/actions';

class App extends Component {

  constructor() {
    super();
    this.state = {
      products: [],
      product: {
          id:1,
          name: 'Arc d\'Triomphe',
          description: 'This beautiful and iconic T-shirt will no doubt lead you to your own triumph.',
          price: 14.99,
          discounted_price: 0.00,
          image: 'arc-d-triomphe.gif',
          image_2: 'arc-d-triomphe-2.gif',
          thumbnail: 'arc-d-triomphe-thumbnail.gif',
          display: 0
      }
    }
  }

  componentDidMount() {
    fetchProducts().then(data => this.setState({ products: data }));
  }

  render() {
    return (
      <React.Fragment>
          {/* <Header></Header> */}
          {/* <ProductList products={this.state.products} /> */}
          <ProductPage product={this.state.product} addProductToCart={() => {}} />
      </React.Fragment>
    );
  }
}

export default App;
