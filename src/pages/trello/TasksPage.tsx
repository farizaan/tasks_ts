import styled from "@emotion/styled"
import { Container, Grid, CircularProgress } from "@mui/material"
import { useEffect } from "react"
import { isTemplateExpression } from "typescript"
import { TasksBlock } from "../../components/trello/TasksBlock"
import { useActions } from "../../hooks/useActions"
import { useTypedSelector } from "../../hooks/useTypedSelector"
import * as TaskActionCreators from "../../store/action/taskActionCreators"
import { DndType, TasksStageType, TaskType } from "../../store/types/taskTypes"

const Title = styled("h1")`
    font-weight: 600;
    font-size: 30px;
    letter-spacing: 0.01em;

`
export const TasksPage = () => {

    const { tasks, loading, error } = useTypedSelector(state => state.tasks)
    const { fetchTasks, dndTask } = useActions(TaskActionCreators)
    useEffect(() => {
        fetchTasks()
    }, [fetchTasks]
    )

    if (loading) {
        return (
            <Container maxWidth="xl">
                <div style={{ padding: "16px", display: "flex", justifyContent: "center" }}>
                    <CircularProgress />
                </div>
            </Container>
        )
    }
    if (error) {
        return (
            <div>{error}</div>
        )
    }
    const handleDrop = (dnd: DndType) => {
        console.log("dnd",dnd);
        
        dndTask(dnd)
    }
    return (
        <div>
            <Container maxWidth='xl'>
                <Title>Задачи</Title>
                <Grid container spacing={2}>
                    {
                        tasks.map((task, i) => (
                            <Grid key={i} item xs={12} md={12 / tasks.length}>
                                <TasksBlock onDrop={(dnd) => handleDrop(dnd)} stage={task}></TasksBlock>
                            </Grid>
                        ))
                    }

                </Grid>
            </Container>
        </div>
    )
}