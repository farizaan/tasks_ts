import { DndType, TaskActionTypes, TasksStageType } from "./../types/taskTypes";
import { Dispatch } from "redux";
import axios from "axios";
export const fetchTasks = () => (dispatch: Dispatch) => {
	dispatch({ type: TaskActionTypes.FETCH_TASKS });

	axios
		.get<TasksStageType[]>(
			"https://kdwed-f1dd2-default-rtdb.europe-west1.firebasedatabase.app/tasks.json"
		)
		.then((res) => {
            
			dispatch({ type: TaskActionTypes.FETCH_TASKS_SUCCESS, payload: res.data});
		})
		.catch((e) => {
			dispatch({
				type: TaskActionTypes.FETCH_TASKS_FAILURE,
				payload: e.message,
			});
		});
};

export const dndTask = (dnd: DndType) => (dispatch:Dispatch) => {
    dispatch({type: TaskActionTypes.DnD_TASK, payload: dnd})
}
