
import { Reducer } from "redux";
import { UserAction, UserActionType, UserState } from "../types/userTypes";

const initState = {
	users: [],
	loading: false,
};

export const userReducer: Reducer<UserState, UserAction> = (
	state = initState,
	action
) => {
	switch (action.type) {
		case UserActionType.FETCH_USERS:
			return { ...state, loading: true, error: undefined };
		case UserActionType.FETCH_USERS_SUCCESS:
			return { ...state, users: action.payload, loading: false };
		case UserActionType.FETCH_USERS_REJECT:
			return { ...state, error: action.payload, loading: false };
		default:
			return state;
	}
};
