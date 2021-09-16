import React from "react";
import Shop from "../pages/Shop";
import Cart from "../pages/Cart"

export interface IRoute {
  path: string;
  exact?: boolean;
  component: React.ComponentType;
}

export enum RouteNames {
    SHOP = "/",
    CART = "/cart"
}

export const routes: IRoute[] = [
  {
    path: RouteNames.SHOP,
    exact: true,
    component: Shop,
  },
  {
    path: RouteNames.CART,
    exact: true,
    component: Cart
  }
];
