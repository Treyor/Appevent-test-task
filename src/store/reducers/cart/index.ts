import { CartAction, CartActionsEnum, CartState } from "./types";

const initialState: CartState = {
  items: []
};

export default function productsReducer(state = initialState, action: CartAction): CartState {
  switch (action.type) {
      case CartActionsEnum.ADD_TO_CART: 
      return {...state, items: [...state.items, action.payload]}
      case CartActionsEnum.REMOVE_FROM_CART:
      return {...state, items: state.items.filter((item) => item.id !== action.payload)}
    default:
      return state;
  }
}