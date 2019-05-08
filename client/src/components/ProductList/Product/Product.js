import React from 'react';

import Thumbnail from '../../Thumbnail/Thumbnail';

function Product({product}) {
  return (
    <React.Fragment>
      <div className="shelf-item">
        <Thumbnail
          classes="shelf-item__thumb"
          src={require(`../../../static/product_images/${product.image}`)}
          alt={product.name}
        />
        <p className="shelf-item__title">{product.name}</p>
        <div className="shelf-item__price">
          <div className="val">{product.price} $</div>
        </div>
        <div className="shelf-item__buy-btn">Buy now</div>
      </div>
    </React.Fragment>
  );
}

export default Product;
