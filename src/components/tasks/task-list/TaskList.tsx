import React, {FunctionComponent} from 'react';
import TaskDetail, {ID, Task} from "../task/TaskDetail";

interface OwnProps {
    data: Task[],
    onDelete(id: ID): void,
    onToggle(id: ID): void,
}

type Props = OwnProps;

const TaskList: FunctionComponent<Props> = (props) => {
    return (
        <>
            {props.data.map((task) => (
                <TaskDetail key={task.id} task={task}
                            onDelete={props.onDelete}
                            onToggle={props.onToggle}/>
            ))}
        </>
    );
};

export default TaskList;
