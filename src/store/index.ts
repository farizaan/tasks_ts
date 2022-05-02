import { basketReducer } from "./reducers/shop/basketReducer";
import { productReducer } from "./reducers/shop/productReducer";
import { userReducer } from "./reducers/userReducer";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";
import { taskReducer } from "./reducers/taskReducer";

const rootReducer = combineReducers({
	user: userReducer,
	shop: combineReducers({
		products: productReducer,
		basket: basketReducer,
	}),
	tasks: taskReducer,
});

export const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(thunk))
);
const confstore = configureStore({
	reducer: rootReducer,
});
export type IState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof confstore.dispatch;
