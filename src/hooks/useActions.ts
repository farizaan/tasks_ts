import { useAppDispatch } from "./useAppDispatch";
import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as userActionCreators from "../store/action/userActionCreators";
// export const useUserActions = () => {
// 	const dispatch = useAppDispatch();

// 	return useMemo(() => {
// 		return bindActionCreators(userActionCreators, dispatch);
// 	}, [dispatch]);
// };

export const useActions = (actions: any) => {
	const dispatch = useAppDispatch();

	return useMemo(() => {
		return bindActionCreators(actions, dispatch);
	}, [dispatch, actions]);
};
