import { Reducer } from "redux";
import { TasksState, TaskActionTypes, TaskActions } from "./../types/taskTypes";

const initState = {
	tasks: [],
	loading: false,
};

export const taskReducer: Reducer<TasksState, TaskActions> = (
	state = initState,
	action
) => {
	let newState = { ...state };
	switch (action.type) {
		case TaskActionTypes.FETCH_TASKS:
			newState = { ...state, loading: true };
			break;
		case TaskActionTypes.FETCH_TASKS_SUCCESS:
			newState = { ...state, tasks: action.payload, loading: false };
			break;
		case TaskActionTypes.FETCH_TASKS_FAILURE:
			newState = { ...state, error: action.payload, loading: false };
			break;
		case TaskActionTypes.DnD_TASK:
		console.log("ddd");
		
			let prevStage = action.payload.prevStage;
			let toStage = action.payload.stage;
			let currentTask = action.payload.task;
			prevStage.items = prevStage?.items.filter((task) => task.taskId !== currentTask.taskId);
			toStage.items.splice(action.payload.columnIndex, 0, currentTask)

			newState.tasks = newState.tasks.map((stage) => 
                (stage.stage === prevStage.stage) ? {...prevStage} : stage
            );
            newState.tasks = newState.tasks.map((stage) => 
                (stage.stage === toStage.stage) ? {...toStage} : stage
            );
			break;
		default:
			return state;
	}
	return newState;
};
