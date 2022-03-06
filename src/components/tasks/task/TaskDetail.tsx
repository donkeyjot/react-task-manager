import React, {FunctionComponent} from 'react';
import {FaTimes} from "react-icons/all";

export declare type ID = number | string;

export interface Task {
    id: ID,
    dateCreated?: number,
    dateToFinish?: number,
    header?: string,
    content?: string
    isFinished?: boolean,
}

export interface OwnProps {
    task: Task,
    onDelete(id: ID): void,
    onToggle(id: ID): void,
}


type Props = OwnProps;

const TaskDetail: FunctionComponent<Props> = (props) => {
    return (
        <div className={`task ${props.task.isFinished ? 'reminder' : ''}`}
             onClick={() => props.onToggle(props.task.id)}
        >
            <h3>{props.task.header}
                <FaTimes
                    style={{color: 'red', cursor: 'pointer'}}
                    onClick={() => props.onDelete(props.task.id)}
                /></h3>
            <div>{props.task.dateToFinish}</div>
            <div>{props.task.content}</div>
        </div>
    );
};

export default TaskDetail;

