import React from "react";
import { withRouter } from "react-router-dom";

import Card, {
  CardPrimaryContent,
  CardMedia,
  CardActions,
  CardActionButtons
} from "@material/react-card/";

import { Button } from "@material/react-button";
import MaterialIcon from "@material/react-material-icon";

import { Headline6, Body2 } from "@material/react-typography/";

import "@material/react-card/index.scss";
import "@material/react-typography/index.scss";
import "@material/react-button/index.scss";
import "@material/react-material-icon/index.scss";

import "./ProductCard.scss";

function ProductCard({ product, ...props }) {
  const handleClick = () => {
    props.history.push(`/product/${product.product_id}`);
  };
  return (
    <React.Fragment>
      <Card className="product-card">
        <CardPrimaryContent>
          <CardMedia
            square
            imageUrl={require(`../../../static/product_images/${
              product.image
            }`)}
            alt={product.name}
            className="product-card__media"
            onClick={handleClick}
          />
        </CardPrimaryContent>
        <Headline6 className="product-card__name">{product.name}</Headline6>
        <Body2 className="product-card__body">{product.description}</Body2>
        <CardActions>
          <CardActionButtons>
            <Button
              className="product-card__button"
              icon={
                <MaterialIcon
                  icon="add_shopping_cart"
                  className="product-card__icon"
                />
              }
              children="Add to cart"
              unelevated
            />
          </CardActionButtons>
        </CardActions>
      </Card>
    </React.Fragment>
  );
}

export default withRouter(ProductCard);
