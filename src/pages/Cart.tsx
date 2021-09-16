import { FC} from "react";

import Table from "../components/Table";
import { useTypedSelector } from "../hooks/useTypedSelector";

const Cart: FC = () => {

  const cart = useTypedSelector((state) => state.cart.items);
  return (
    <div className="page-layout">
      {cart.length > 0 ? (
        <Table />
      ) : (
        <div>Корзина пуста</div>
      )}
    </div>
  );
};

export default Cart;
