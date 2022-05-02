import styled from "@emotion/styled";
import { useDrop } from "react-dnd";
import { DndType, TasksStageType } from "../../store/types/taskTypes";
import { DropZone } from "./DropZone";
import { TaskItem } from "./TaskItem";




type Props = {
    stage: TasksStageType,
    onDrop: (dnd: DndType) => void
}
const StageHeader = styled("div")`
    display: flex;
    border-bottom: 3px solid #787878;
    padding-bottom: 12px;
    margin-bottom: 24px;
    justify-content: center;
    align-items: center;
`
const StageTitle = styled("h4")`
    font-weight: 400;
    font-size: 16px;
    letter-spacing: 0.015em;
    text-transform: uppercase;
    margin: 0 4px 0 0;


`
const Count = styled("p")`
    background: #E0E0E0;
    border-radius: 10px;
    padding: 2px 6px;
    color: #625F6D;
    font-weight: 500;
    font-size: 12px;
    margin: 0;
`
export const TasksBlock: React.FC<Props> = ({ stage, onDrop }) => {
    const [{ isOver, canDrop, endDrag }, drop] = useDrop(() => ({
        accept: "TASK",
        drop: (item: DndType) => {
           
        },
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
            endDrag: monitor.getDropResult()
        })
    }))
    return (
        <div style={{ boxShadow: isOver ? '0 10px 15px 0 rgba(0, 0, 0, 1)' : 'none' }}>
            <StageHeader>
                <StageTitle>{stage.stageName}</StageTitle>
                <Count>{stage.items.length}</Count>
            </StageHeader>
            <div  >
                {
                    stage.items.map((item,index) => (
                        <>
                            <DropZone indexInColumn={index} stage={stage} onDrop={onDrop} ></DropZone>
                            <TaskItem task={item} key={item.taskId} stage={stage}></TaskItem>
                            <DropZone indexInColumn={index+1} stage={stage} onDrop={onDrop} ></DropZone>
                        </>
                    ))
                }
            </div>

        </div>
    )
}