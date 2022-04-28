import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as userActionCreators from "../store/action/userActionCreators";
export const useUserActions = () => {
	const dispatch = useDispatch();

	return useMemo(() => {
		return bindActionCreators(userActionCreators, dispatch);
	}, [dispatch]);
};
