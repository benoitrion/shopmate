import React from 'react';

import Card, {
  CardPrimaryContent,
  CardMedia,
  CardActions,
  CardActionButtons
} from '@material/react-card/'

import { Button } from '@material/react-button';
import MaterialIcon from '@material/react-material-icon';

import {
  Headline6,
  Body2
} from '@material/react-typography/'

import '@material/react-card/index.scss';
import '@material/react-typography/index.scss';
import '@material/react-button/index.scss';
import '@material/react-material-icon/index.scss';

import './Product.scss';

function Product({ product }) {
  const image = require(`../../../static/product_images/${product.image}`);
  return (
    <React.Fragment>
      <Card className='product-card'>
        <CardPrimaryContent>
          <CardMedia square imageUrl={image} alt={product.name} className='product-card__media' />
        </CardPrimaryContent>
        <div className='product-card__primary'>
          <Headline6 className='product-card__title'>
            {product.name}
          </Headline6>
        </div>
        <Body2 className='product-card__body'>
          {product.description}
        </Body2>
        <CardActions>
          <CardActionButtons>
            <Button className='product-card__button'>
              <MaterialIcon icon='add_shopping_cart' className='product-card__icon' />
              <span className="mdc-button__label">Add to cart</span>
            </Button>
          </CardActionButtons>
        </CardActions>
      </Card>
    </React.Fragment>
  );
}

export default Product;
