import React from "react";
import PropTypes from "prop-types";

import { Cell, Grid, Row } from "@material/react-layout-grid";

import "@material/react-layout-grid/index.scss";

import ProductCard from "./ProductCard/ProductCard";

import "./ProductList.scss";

const ProductList = ({ products }) => (
  <React.Fragment>
    <Grid className="product-list_grid">
      {products && products.length > 0 ? (
        <Row>
          {products.map(product => {
            return (
              <Cell columns={4} key={product.id}>
                <ProductCard product={product} />
              </Cell>
            );
          })}
        </Row>
      ) : (
        "Loading..."
      )}
    </Grid>
  </React.Fragment>
);

ProductList.propTypes = {
  products: PropTypes.array.isRequired
};

export default ProductList;
