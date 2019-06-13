import React from 'react';
import PropTypes from 'prop-types';

import { Cell, Grid, Row } from '@material/react-layout-grid';

import '@material/react-layout-grid/index.scss';

import Product from './Product/Product';

import './ProductList.scss';

function ProductList({ products }) {
  return (
    <React.Fragment>
      <Grid className="product-list_grid">
        <Row>
          {products.map(p => {
            return (
              <Cell columns={3} key={p.id}>
                  <Product product={p}/>
              </Cell>
            )
          })}
        </Row>
      </Grid>
    </React.Fragment>
  )
}

ProductList.propTypes = {
  products: PropTypes.array.isRequired
};

export default ProductList;
