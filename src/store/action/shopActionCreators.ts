import { IState } from "./../index";
import {
	BasketActions,
	BasketActionTypes,
	FetchProductsAction,
	Product,
	ProductAction,
	ProductActionTypes,
} from "./../types/shopTypes";
import axios from "axios";
import { ThunkAction } from "redux-thunk";

export const fetchProductAction = (): FetchProductsAction => {
	return {
		type: ProductActionTypes.FETCH_PRODUCTS,
	};
};
type ThunkProductType = ThunkAction<void, IState, unknown, ProductAction>;
export const fetchProducts = (): ThunkProductType => (dispatch) => {
	dispatch(fetchProductAction());
	axios
		.get(`https://fakestoreapi.com/products`)
		.then((res) => {
			dispatch({
				type: ProductActionTypes.FETCH_PRODUCTS_SUCCESS,
				payload: res.data,
			});
		})
		.catch((error) => {
			dispatch({
				type: ProductActionTypes.FETCH_PRODUCTS_FAILURE,
				payload: error.message,
			});
		});
};

type ThunkBasketType = ThunkAction<void, IState, unknown, BasketActions>;

export const addToBasket =
	(product: Product): ThunkBasketType =>
	(dispatch) => {
		dispatch({ type: BasketActionTypes.ADD_TO_BASKET, payload: product });
	};
export const decrementProduct =
	(productId: number): ThunkBasketType =>
	(dispatch) => {
		dispatch({
			type: BasketActionTypes.DECREMENT_PRODUCT_COUNT,
			payload: productId,
		});
	};
export const incrementProduct =
	(productId: number): ThunkBasketType =>
	(dispatch) => {
		dispatch({
			type: BasketActionTypes.INCREMENT_PRODUCT_COUNT,
			payload: productId,
		});
	};
export const removeProduct =
	(productId: number): ThunkBasketType =>
	(dispatch) => {
		dispatch({ type: BasketActionTypes.REMOVE_PRODUCT, payload: productId });
	};

export const removeAllProducts = (): ThunkBasketType => (dispatch) => {
	dispatch({ type: BasketActionTypes.REMOVE_ALL_FROM_BASKET });
};
export const setModal = (show: boolean): ThunkBasketType => (dispatch) => {
	dispatch({type: BasketActionTypes.SET_MODAL, payload: show})
}
