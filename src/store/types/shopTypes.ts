export enum ProductActionTypes {
	FETCH_PRODUCTS = "FETCH_PRODUCTS",
	FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS",
	FETCH_PRODUCTS_FAILURE = "FETCH_PRODUCTS_FAILURE",
}
export type Product = {
	id: number;
	title: string;
	price: number;
	category: string;
	description: string;
	image: string;
	rating: Rating;
};
export type Rating = {
	rate: number;
	count: number;
};
export type ProductState = {
	products: Product[];
	loading: boolean;
	error?: string;
};

export type FetchProductsAction = {
	type: ProductActionTypes.FETCH_PRODUCTS;
};
export type FetchProductsSuccessAction = {
	type: ProductActionTypes.FETCH_PRODUCTS_SUCCESS;
	payload: Product[];
};
export type FetchProductsFailureAction = {
	type: ProductActionTypes.FETCH_PRODUCTS_FAILURE;
	payload: string;
};
export type ProductAction =
	| FetchProductsAction
	| FetchProductsSuccessAction
	| FetchProductsFailureAction;

// Basket

export type BasketItem = {
	product: Product;
	count: number;
};
export type BasketState = {
	basket: BasketItem[];
	modalOpen: boolean;
};

export enum BasketActionTypes {
	ADD_TO_BASKET = "ADD_TO_BASKET",
	INCREMENT_PRODUCT_COUNT = "INCREMENT_PRODUCT_COUNT",
	DECREMENT_PRODUCT_COUNT = "DECREMENT_PRODUCT_COUNT",
	REMOVE_ALL_FROM_BASKET = "REMOVE_ALL_FROM_BASKET",
	REMOVE_PRODUCT = "REMOVE_FROM_BASKET",
	SET_MODAL = "SET_MODAL",
}
export type AddToBasketAction = {
	type: BasketActionTypes.ADD_TO_BASKET;
	payload: Product;
};
export type UpdateProductActions = {
	type:
		| BasketActionTypes.INCREMENT_PRODUCT_COUNT
		| BasketActionTypes.DECREMENT_PRODUCT_COUNT
		| BasketActionTypes.REMOVE_PRODUCT;
	payload: number;
};
export type RemoveAllFromBasketAction = {
	type: BasketActionTypes.REMOVE_ALL_FROM_BASKET;
};
export type ModalAction = {
	type: BasketActionTypes.SET_MODAL;
	payload: boolean;
};
export type BasketActions =
	| AddToBasketAction
	| UpdateProductActions
	| RemoveAllFromBasketAction
	| ModalAction;
