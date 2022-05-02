
import styled from "@emotion/styled"
import { TasksStageType, TaskType } from "../../store/types/taskTypes"
import moment from "moment";
import { useDrag } from "react-dnd";
import { DropZone } from "./DropZone";


type Props = {
    task: TaskType,
    stage: TasksStageType
}

const Block = styled("div")`
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
    border-radius: 8px;
    padding: 12px 16px;
    cursor: pointer;
    /* margin-bottom: 16px; */
   
    .content {
        justify-content: space-between;
        align-items: center;
        display: flex;
    }
    p {
        margin: 0
    }
    .name {
        font-weight: 500;
        font-size: 14px;
    }
    p.date {
        color: #787878;
        font-weight: 400;
        font-size: 12px;
        letter-spacing: 0.004em;
        margin-bottom: 8px;
    }
    img {
        width: 24px;
        height: 24px;
        border-radius: 50%;
        object-fit: cover;
    }
`
const TaskTypeDiv = styled('p') <{ type: number }>`
    margin-bottom: 16px;
    color: #FFFFFF;
    font-weight: 400;
    font-size: 12px;
    padding: 4px;
    border-radius: 4px;
    margin-bottom: 12px !important;
    background: ${props => props.type === 2 ? `#1369BF` : `#27AE60`};
    display: inline-block;
`
export const TaskItem: React.FC<Props> = ({ stage, task }) => {

    const [{ isDragging }, drag, dragPreview] = useDrag(() => ({
        type: "TASK",
        item: { task, prevStage: stage },
        prevStage: stage,
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        })
    }))

    return (
        <>
            <Block style={{ opacity: isDragging ? 0.9 : 1 }} ref={drag}>
                <TaskTypeDiv type={task.taskTypeId}>
                    {task.taskTypeName}

                </TaskTypeDiv>
                <div className="content">
                    <div style={{ width: "80%" }}>
                        <p className="date">{moment(task.createTimestamp).format("DD MMMM , в HH:mm")}</p>
                        <p className="name"> {task.clientName}</p>
                    </div>
                    <div>
                        {
                            task.clientId && (
                                <img src="https://www.vokrug.tv/pic/person/2/b/f/4/2bf448098b7badf3b37e87c510da29bc.jpeg" alt="" />

                            )
                        }
                    </div>

                </div>
            </Block>
        </>
    )
}


