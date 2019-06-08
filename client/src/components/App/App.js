import React, { Component } from 'react';

import ProductList from '../ProductList/ProductList';

import { fetchProducts } from '../../services/catalog/actions';

class App extends Component {

  constructor(props) {
    super(props);
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
        <main>
          <h1>Shopmate</h1>
          <div className="shelf-container">
            <ProductList products={this.state.products} />
          </div>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
