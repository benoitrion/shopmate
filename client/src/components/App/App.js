import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Header from '../Header/Header';
import ProductList from '../ProductList/ProductList';

import { fetchProducts } from '../../services/catalog/actions';

class App extends Component {

  constructor() {
    super();
    this.state = {
      products: []
    }
  }

  componentDidMount() {
    fetchProducts().then(data => this.setState({ products: data }));
  }

  render() {
    return (
      <React.Fragment>
        <Header></Header>
        <ProductList products={this.state.products} />
      </React.Fragment>
    );
  }
}

export default App;
