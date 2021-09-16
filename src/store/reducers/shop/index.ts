import { ShopAction, ShopActionsEnum, ShopState } from "./types";

const initialState: ShopState = {
  items: [],
  isLoading: false,
  error: ""
};

export default function productsReducer(state = initialState, action: ShopAction): ShopState {
  switch (action.type) {
      case ShopActionsEnum.SET_PRODUCTS: 
      return {...state, items: action.payload}
      case ShopActionsEnum.SET_ERROR:
        return {...state, error: action.payload, isLoading: false}
      case ShopActionsEnum.SET_IS_LOADING:
        return {...state, isLoading: action.payload}
    default:
      return state;
  }
}
