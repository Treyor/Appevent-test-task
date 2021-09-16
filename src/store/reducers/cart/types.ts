import { IProduct } from "../../../models";

export interface CartState {
  items: IProduct[];
}

export enum CartActionsEnum {
  ADD_TO_CART = "ADD_TO_CART",
  REMOVE_FROM_CART = "REMOVE_FROM_CART",
}

export interface SetCartAction {
  type: CartActionsEnum.ADD_TO_CART;
  payload: IProduct;
}

export interface RemoveCartAction {
  type: CartActionsEnum.REMOVE_FROM_CART;
  payload: number;
}

export type CartAction = SetCartAction | RemoveCartAction;
