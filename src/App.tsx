import { FC, useEffect } from "react";
import { useDispatch } from "react-redux";

import Navbar from "./components/Navbar";
import AppRouter from "./components/AppRouter";
import { useTypedSelector } from "./hooks/useTypedSelector";
import { IProduct } from "./models";
import { CartActionCreators } from "./store/reducers/cart/actionCreators";

import "./App.css";

const App: FC = () => {
  const dispatch = useDispatch();

  const storage = localStorage.getItem("cart") as string;
  const parsedStorage = JSON.parse(storage);
  const inCart = useTypedSelector((state) => state.cart.items);

  useEffect(() => {
    if (
      JSON.stringify(localStorage.getItem("cart")) !== JSON.stringify(inCart)
    ) {
      localStorage.setItem("cart", JSON.stringify(inCart));
    }
  }, [inCart]);

  useEffect(() => {
    parsedStorage.map((item: IProduct) =>
      dispatch(CartActionCreators.addToCart(item))
    );
  }, []);

  return (
    <>
      <Navbar />
      <AppRouter />
    </>
  );
};

export default App;
