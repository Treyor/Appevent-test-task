import { AppDispatch } from "../..";
import { SetErrorAction, SetIsLoadingAction, SetShopAction, ShopActionsEnum } from "./types";
import { IProduct } from "../../../models";

const URL = "https://appevent.ru/dev/task1/catalog"

export const ShopActionCreators = {
    setProducts: (products: IProduct[]): SetShopAction => ({type: ShopActionsEnum.SET_PRODUCTS, payload: products}),
    setIsLoading: (payload: boolean): SetIsLoadingAction => ({type: ShopActionsEnum.SET_IS_LOADING, payload}),
    setError: (payload: string): SetErrorAction => ({type: ShopActionsEnum.SET_ERROR, payload}),
    /**
     * Redux-thunk async action
     * It awaits answer from URL and then dispatch it to state
     */
    getProducts: () => async (dispatch: AppDispatch) => {
        try {
            dispatch(ShopActionCreators.setIsLoading(true))
            await fetch(URL)
            .then((data) => data.json())
            .then((res) => dispatch(ShopActionCreators.setProducts(res.items)))
            .then(() => dispatch(ShopActionCreators.setIsLoading(false)))

        } catch (e) {
            dispatch(ShopActionCreators.setError("Произошла ошибка"))
        }
    }
}