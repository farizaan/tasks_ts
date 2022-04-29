import { Reducer } from "redux";
import {
	BasketActions,
	BasketActionTypes,
	BasketState,
} from "./../../types/shopTypes";

const initState = {
	basket: JSON.parse(localStorage.getItem("basket") || "[]") || [],
	modalOpen: false,
};
export const basketReducer: Reducer<BasketState, BasketActions> = (
	state = initState,
	action
) => {
	let newState = { ...state };
	let item;
	switch (action.type) {
		case BasketActionTypes.ADD_TO_BASKET:
			item = newState.basket.find(
				({ product }) => product.id === action.payload.id
			);
			if (item) {
				item.count += 1;
				newState.basket = [...newState.basket];
			} else {
				newState.basket = [
					...newState.basket,
					{ product: action.payload, count: 1 },
				];
			}
			break;
		case BasketActionTypes.INCREMENT_PRODUCT_COUNT:
			item = newState.basket.find(
				({ product }) => product.id === action.payload
			);
			if (item) {
				item.count += 1;
				newState.basket = [...newState.basket];
			}
			break;
		case BasketActionTypes.DECREMENT_PRODUCT_COUNT:
			item = newState.basket.find(
				({ product }) => product.id === action.payload
			);
			if (item) {
				if (item?.count === 1) {
					newState.basket = state.basket.filter(({ product }) => {
						return product.id !== action.payload;
					});
				} else {
					item.count -= 1;
					newState.basket = [...newState.basket];
				}
			}
			break;
		case BasketActionTypes.REMOVE_PRODUCT:
			newState.basket = state.basket.filter(({ product }) => {
				return product.id !== action.payload;
			});
			break;
		case BasketActionTypes.REMOVE_ALL_FROM_BASKET:
			newState.basket = [];
			break;
		case BasketActionTypes.SET_MODAL:
			newState.modalOpen = action.payload;
			break;
		default:
			return state;
	}
    localStorage.setItem("basket", JSON.stringify(newState.basket));
	return newState;
};
