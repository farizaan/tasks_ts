import { Reducer } from "redux";
import {
	ProductAction,
	ProductActionTypes,
	ProductState,
} from "../../types/shopTypes";

const initState = {
	products: [],
	loading: false,
	error: "",
};
export const productReducer: Reducer<ProductState, ProductAction> = (
	state = initState,
	action
) => {
	let newState = { ...state };

	switch (action.type) {
		case ProductActionTypes.FETCH_PRODUCTS:
			newState = { ...state, loading: true };

			break;
		case ProductActionTypes.FETCH_PRODUCTS_SUCCESS:
			newState = { ...state, products: action.payload, loading: false };
			break;
		case ProductActionTypes.FETCH_PRODUCTS_FAILURE:
			newState = { ...state, error: action.payload, loading: false };
			break;
		default:
			return state;
	}
	return newState;
};
