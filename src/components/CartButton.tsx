import { FC } from "react";
import { useDispatch } from "react-redux";

import { CartActionCreators } from "../store/reducers/cart/actionCreators";
import { IProduct } from "../models";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { RouteNames } from "../routes";
import Link from "./Link";


const CartButton: FC<IProduct> = (props) => {
  const inCart = useTypedSelector((state) => state.cart.items);

  const dispatch = useDispatch();

  /** Check our state for product, which we got from props
   * 
   * @param {element} element which we got from props 
   * @returns {element.id} if found in cart state
   * or 
   * @returns {false} if not found 
   */
  const isInCart = (element: IProduct) => {
    if (element.id === props.id) {
      return element.id;
    } else {
      return false;
    }
  };

  return inCart.find(isInCart) ? (
    <Link
      label={"Оформить"}
      link={RouteNames.CART}
      elementClassName={"button card__button_purple"}
    />
  ) : (
    <button
      className={"button card__button_purple"}
      onClick={() => dispatch(CartActionCreators.addToCart(props))}
    >
      Добавить в корзину
    </button>
  );
};

export default CartButton;
