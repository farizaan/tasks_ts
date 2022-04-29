import { useDispatch } from 'react-redux';
import { useMemo } from "react";
import { ActionCreatorsMapObject, bindActionCreators } from "redux";

export const useActions = (actions: ActionCreatorsMapObject) => {
	
	const dispatch = useDispatch();

	return useMemo(() => {
		return bindActionCreators(actions, dispatch);
	}, [dispatch, actions]);
};
