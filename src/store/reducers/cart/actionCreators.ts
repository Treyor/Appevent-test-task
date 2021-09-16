import { SetCartAction, CartActionsEnum, RemoveCartAction } from "./types";

import { IProduct } from "../../../models";

export const CartActionCreators = {
    addToCart: (item: IProduct): SetCartAction => ({type: CartActionsEnum.ADD_TO_CART, payload: item}),
    removeFromCart: (id: number): RemoveCartAction => ({type: CartActionsEnum.REMOVE_FROM_CART, payload: id})
}