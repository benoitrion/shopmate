import React from 'react';
import PropTypes from 'prop-types';

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

import './ProductCard.scss';

function ProductCard({ product }) {
  const image = require(`../../../static/product_images/${product.image}`);
  return (
    <React.Fragment>
      <Card className='product-card'>
        <CardPrimaryContent>
          <CardMedia square imageUrl={image} alt={product.name} className='product-card__media' />
        </CardPrimaryContent>
        <Headline6 className='product-card__name'>
          {product.name}
        </Headline6>
        <Body2 className='product-card__body'>
          {product.description}
        </Body2>
        <CardActions>
          <CardActionButtons>
            <Button 
              className='product-card__button' 
              icon={<MaterialIcon icon='add_shopping_cart' className='product-card__icon'/>} 
              children='Add to cart' 
              unelevated
            >
            </Button>
          </CardActionButtons>
        </CardActions>
      </Card>
    </React.Fragment>
  );
}

ProductCard.propTypes = {
  product: PropTypes.object.isRequired
};

export default ProductCard;
