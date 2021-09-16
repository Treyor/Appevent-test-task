import { FC } from "react";
import { IProduct } from "../models";
import CartButton from "./CartButton";

/*
  Product-card component, with props type assigned to interface IProduct
*/
const Card: FC<IProduct> = (props) => {
  const { name, image, price } = props;
  return (
    <div className="shop-card">
      <div className="shop-card__image_wrapper">
        <img src={`${image}`} alt={`${name}`} className="shop-card__image" />
      </div>

      <div className="shop-card__info">
        <h1 className="shop-card__info__title item__title_size">{name}</h1>
        <div className={"shop-card__info__commercial"}>
          <h1 className="shop-card__info__price_currency item__title_size">{price}</h1>
          <CartButton {...props} />
        </div>
      </div>
    </div>
  );
};

export default Card;
