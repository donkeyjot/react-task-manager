import React, {FunctionComponent, useEffect, useState} from 'react';
import {deleteTask, getTask, updateTask} from "../adapters/taskList.adapter";
import {useNavigate, useParams} from "react-router-dom";

export declare type ID = number | string;

export interface Task {
    _id?: string,
    dateToFinish?: string,
    title?: string,
    content?: string
    isFinished?: boolean,
}

export interface OwnProps {
}

type Props = OwnProps;

const TaskDetail: FunctionComponent<Props> = (props) => {
    const [task, setTask] = useState<Task>()
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const {id} = useParams();
    const navigate = useNavigate();

    const onToggle = () => {
        setIsLoaded(false)
        const isFinishedChange = !task?.isFinished
        const newTask = {
            ...task,
            isFinished: isFinishedChange
        }
        if (id) {
            updateTask(id, newTask)
                .then(resp => {
                        setTask(resp?.data)
                        setIsLoaded(true)
                    }, error => {
                        setIsLoaded(true)
                        setError(error)
                    }
                )
        }
    }

    const handleDelete = (e: any) => {
        e.preventDefault();
        if (id) {
            deleteTask(id)
                .then(() => {
                        navigate('../tasks', {})
                    }, () => {
                        console.log('Remove not successful, try again')
                    }
                )
        }
    }

    useEffect(() => {
        let isApiSubscribed = true
        if (id) {
            getTask(id)
                .then(response => {
                    if (isApiSubscribed) {
                        setIsLoaded(true)
                        setTask(response?.data)
                    }
                }, error => {
                    if (isApiSubscribed) {
                        setIsLoaded(true)
                        setError(error)
                    }
                })
            return () => {
                isApiSubscribed = false
            }
        }
    }, [])

    if (error) {
        return <div>Error: {error}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <div className={`task ${task?.isFinished ? 'reminder' : ''}`}
                 onClick={() => onToggle()}
            >
                <h3>{task?.title}
                    <span
                        style={{color: 'red', cursor: 'pointer'}}
                        onClick={(event: any) => handleDelete(event)}
                    >DELETE</span></h3>
                <div>{task?.dateToFinish}</div>
                <div>{task?.content}</div>
            </div>
        );
    }
}
export default TaskDetail;

