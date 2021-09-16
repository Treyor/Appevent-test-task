import { IProduct } from "../../../models";
export interface ShopState {
  items: IProduct[];
  isLoading: boolean;
  error: string;
}

export enum ShopActionsEnum {
  SET_PRODUCTS = "SET_PRODUCTS",
  SET_ERROR = "SET_ERROR",
  SET_IS_LOADING = "SET_IS_LOADING",
}

export interface SetShopAction {
  type: ShopActionsEnum.SET_PRODUCTS;
  payload: IProduct[];
}

export interface SetErrorAction {
  type: ShopActionsEnum.SET_ERROR;
  payload: string;
}

export interface SetIsLoadingAction {
  type: ShopActionsEnum.SET_IS_LOADING;
  payload: boolean;
}

export type ShopAction = SetShopAction | SetErrorAction | SetIsLoadingAction;
