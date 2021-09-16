import React, { useEffect, useState } from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { RouteNames } from "../routes";
import Link from "./Link";

const Navbar = () => {
  const cart = useTypedSelector((state) => state.cart.items).length;
  const cartButtonTitle = cart > 0 ? `Товаров: ${cart}` : "Корзина";

  const [scrolled, setScrolled] = useState(0);

  /**
   * Define scroll position
   */
  const listenToScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const scrolled = winScroll / height;

    setScrolled(scrolled);
  };

  /**
   * Adding scroll listener after component mounting
   * And remove it after unmount
   */
  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);

    return function cleanEvents() {
      window.removeEventListener("scroll", listenToScroll);
    };
  }, []);

  return (
    <header
      className={`navbar ${
        scrolled > 0.02 ? "navbar_scrolled" : "navbar_not-scrolled"
      }`}
    >
      <div className={"navbar__content"}>
        <Link
          label={"Каталог"}
          link={RouteNames.SHOP}
          elementClassName={"button navbar__button_yellow"}
        />

        <Link
          label={cartButtonTitle}
          link={RouteNames.CART}
          elementClassName={"button navbar__button_yellow"}
        />
      </div>
    </header>
  );
};

export default Navbar;
