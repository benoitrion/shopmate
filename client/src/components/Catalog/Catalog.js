import React from "react";

import ProductList from "../ProductList/ProductList";
import { Cell, Grid, Row } from "@material/react-layout-grid";

import "@material/react-layout-grid/index.scss";

import "./Catalog.scss";

const Catalog = ({ products }) => (
  <React.Fragment>
    <Grid className="catalog_grid">
      <Row className="catalog-paging" columns={12}>
        This is catalog paging
      </Row>
      <Row>
        <Cell className="catalog-filtering" columns={3}>
          This is catalog filtering
        </Cell>
        <Cell columns={9}>
          <ProductList className="catalog-product_list" products={products} />
        </Cell>
      </Row>
    </Grid>
  </React.Fragment>
);

export default Catalog;
