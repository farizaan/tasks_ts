import { useDrop } from "react-dnd";
import { DndType, TasksStageType, TaskType } from "../../store/types/taskTypes";

type Props = {
	indexInColumn: number,
	stage: TasksStageType
	onDrop: (dnd: any) => void;
};
export const DropZone: React.FC<Props> = ({ indexInColumn, stage, onDrop }) => {
	const [{ isOver, canDrop, endDrag }, drop] = useDrop(() => ({
		accept: "TASK",
		drop: (item: any, monitor) => {
			onDrop({ stage: stage, prevStage: item.prevStage, task: item.task, columnIndex: indexInColumn });
		},
		collect: (monitor) => ({

			isOver: monitor.isOver(),
			canDrop: monitor.canDrop(),
			endDrag: monitor.getDropResult(),

		}),

	}));
	const isActive = isOver && canDrop;

	return (

		<div className={`dropZone  ${isActive ? 'active' : ''}`}
			ref={drop}
		/>

	)

};
