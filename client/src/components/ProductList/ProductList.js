import React from 'react';

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
              <Cell columns={4} key={p.id}>
                  <Product product={p}/>
              </Cell>
            )
          })}
        </Row>
      </Grid>
    </React.Fragment>
  )
}

export default ProductList;
