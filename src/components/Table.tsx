import { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { CartActionCreators } from "../store/reducers/cart/actionCreators";

// Component for product-cart visualization
const Table: FC = () => {
  const cart = useTypedSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  useEffect(() => {}, [cart]);
  return (
    <table className={"cart__table"}>
      <thead>
        <tr className={"cart__table__row"}>
          <td className={"cart__table__cell"}>Товар</td>
          <td className={"cart__table__cell"}>Цена</td>
          <td className={"cart__table__cell"}></td>
        </tr>
      </thead>
      <tbody>
        {cart.map((item) => {
          return (
            <tr>
              <td style={{ width: "70%" }} className={"cart__table__cell"}>
                {item.name}
              </td>

              <td
                className={"shop-card__info__price_currency cart__table__cell"}
              >
                {item.price}
              </td>

              <td className={"cart__table__cell"}>
                <button
                  className={"button cart__button-delete"}
                  onClick={() =>
                    dispatch(CartActionCreators.removeFromCart(item.id))
                  }
                >
                  Убрать
                </button>
              </td>
            </tr>
          );
        })}
        <tr>
          <td className={"cart__table__cell"}>Итого с суммой всей корзины</td>

          <td
            className={
              "shop-card__info__price shop-card__info__price_currency cart__table__cell"
            }
          >
            {cart.reduce((sum, current) => sum + current.price, 0)}
          </td>

          <td className={"cart__table__cell"}></td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
