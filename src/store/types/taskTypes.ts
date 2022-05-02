

export enum TaskActionTypes {
	FETCH_TASKS = "FETCH_TASKS",
	FETCH_TASKS_FAILURE = "FETCH_TASKS_FAILURE",
	FETCH_TASKS_SUCCESS = "FETCH_TASKS_SUCCESS",
    DnD_TASK = "DnD_TASK"
}
export type TaskType = {
	taskTypeName: string;
	taskTypeId: number;
	taskId: number;
	plannedStartTime: string;
	plannedEndTime: string;
	createTimestamp: string;
	clientName: string;
	clientId: string;
};
export type TasksStageType = {
	stageName: string;
	stage: string;
	items: TaskType[];
};

export type TasksState = {
	tasks: TasksStageType[];
	loading: boolean;
	error?: string;
};

export type fetchTasksAction = {
	type: TaskActionTypes.FETCH_TASKS;
};
export type fetchTasksSuccessAction = {
	type: TaskActionTypes.FETCH_TASKS_SUCCESS;
	payload: TasksStageType[];
};
export type fetchTasksFailureAction = {
	type: TaskActionTypes.FETCH_TASKS_FAILURE;
	payload: string;
};
export type DndType = {
    prevStage: TasksStageType,
    stage: TasksStageType,
    task: TaskType,
	columnIndex: number
}
export type DnDActions= {
    type: TaskActionTypes.DnD_TASK;
    payload: DndType
}
export type TaskActions =
	| fetchTasksAction
	| fetchTasksSuccessAction
	| fetchTasksFailureAction
    | DnDActions;
