export enum UserActionType {
	FETCH_USERS = "FETCH_USERS",
	FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS",
	FETCH_USERS_REJECT = "FETCH_USERS_REJECT",
}
export type User = {
	id: number;
	name: string;
	username: string;
	phone?: string;
	website?: string;
	address?: unknown;
	company?: unknown;
	email?: string;
};
export type UserState = {
	users: User[];
	loading: boolean;
	error?: string;
};
export type FetchUserAction = {
	type: UserActionType.FETCH_USERS;
};
export type FetchUserSuccessAction = {
	type: UserActionType.FETCH_USERS_SUCCESS;
	payload: User[];
};
export type FetchUserRejectAction = {
	type: UserActionType.FETCH_USERS_REJECT;
	payload: string;
};
export type UserAction =
	| FetchUserAction
	| FetchUserSuccessAction
	| FetchUserRejectAction;
