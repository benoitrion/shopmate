import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "../Header/Header";
import Catalog from "../Catalog/Catalog";
import ProductPage from "../ProductPage/ProductPage";
import PageNotFound from "../PageNotFound";

import { fetchProducts } from "../../services/catalog/actions";

class App extends Component {
  constructor() {
    super();
    this.state = {
      products: []
    };
  }

  componentDidMount() {
    fetchProducts().then(data => {
      this.setState({ products: data });
    });
  }

  render() {
    return (
      <React.Fragment>
        <Header
          clickOnMenu={() => {
            console.log("menu clicked");
          }}
        />
        <Router>
          <Switch>
            <Route
              exact
              path="/"
              render={props => (
                <Catalog {...props} products={this.state.products} />
              )}
            />
            <Route
              path="/product/:product_id"
              render={props => (
                <ProductPage
                  {...props}
                  product={this.state.products.find(
                    p => Number(props.match.params.product_id) === p.product_id
                  )}
                  addProductToCart={() => {
                    console.log("added to cart");
                  }}
                />
              )}
            />
            <Route component={PageNotFound} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
