import { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../hooks/useTypedSelector";

import { ShopActionCreators } from "../store/reducers/shop/actionCreators";
import Preloader from "../components/Preloader";
import Card from "../components/Card";

const Shop: FC = () => {
  const currentState = useTypedSelector((state) => state.products.items);
  const isLoading = useTypedSelector((state) => state.products.isLoading);

  const dispatch = useDispatch();

  // Load data from API to state 
  useEffect(() => {
    if (currentState.length === 0) {
      dispatch(ShopActionCreators.getProducts());
    }
  }, []);

  return (
    <div className="page-layout">
      {isLoading === true ? (
        <Preloader />
      ) : (
        <div className="shop-item">
          {currentState.map((item) => {
            return <Card {...item} key={item.id} />;
          })}
        </div>
      )}
    </div>
  );
};

export default Shop;
