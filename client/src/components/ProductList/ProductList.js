import React from 'react';

import { Cell, Grid, Row } from '@material/react-layout-grid';

import '@material/react-layout-grid/index.scss';

import Product from './Product/Product';

function ProductList({ products }) {
  return (
    <Grid>
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
  )
}

export default ProductList;
