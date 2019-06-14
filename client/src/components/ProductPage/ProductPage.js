import React from 'react';
import PropTypes from 'prop-types';

import { Button } from '@material/react-button';
import { Cell, Grid, Row } from '@material/react-layout-grid';

import '@material/react-layout-grid/index.scss';
import '@material/react-button/index.scss';

import './ProductPage.scss';

function ProductPage({ product, addProductToCart }) {
  const image = require(`../../static/product_images/${product.image}`);
  return (
    <React.Fragment>
      <Grid className='product-page_grid'>
        <Row>
          <Cell className='product-page_image-section' columns={4}>
            <Cell className='product-page_image'>
              <img scr={image} alt={product.name} />
            </Cell>
            <Row className='product-page_thumbnails' >
              <Cell className='product-page_thumbnail'/>
              <Cell className='product-page_thumbnail'/>
              <Cell className='product-page_thumbnail'/>
            </Row>
          </Cell>
          <Cell className='product-page_details' columns={8}>
              <Cell className='product-page_breadcrumb'>
                Home - All categories - Men's clothing
              </Cell>
              <Cell className='product-page_review'>
                stars
              </Cell>
              <Cell className='product-page_name'>
                {product.name}  
              </Cell>
              <Cell className='product-page_price'>
                {product.price}
              </Cell>
              <Cell className='product-page_color'>
                <span>Color</span>
                <div className='product-page_color-selection'>
                  Color selection
                </div> 
              </Cell>
              <Cell className='product-page_size'>
                <span>Size</span>
                <div className='product-page_size-selection'>
                  xs - s - m - l -xl - xxl
                </div> 
              </Cell>
              <Cell className='product-page_quantity'>
                <span>Quantity</span>
                <div className='product-page_quantity-selection'>
                  - 2 +
                </div> 
              </Cell>
              <Button 
                className='product-page_add-to-cart'
                children='Add to cart'
                onClick={() => addProductToCart(product)}
                unelevated>
              </Button>
            </Cell>
          </Row>
      </Grid>
    </React.Fragment>
  )
}

ProductPage.propTypes = {
  product: PropTypes.object.isRequired
};

export default ProductPage;