import React, {FunctionComponent, useEffect, useState} from 'react';
import {getTasks} from "../adapters/taskList.adapter";
import {Task} from "./TaskDetail";
import {Link} from "react-router-dom";

interface OwnProps {
}

type Props = OwnProps;

const TaskList: FunctionComponent<Props> = (props) => {
    const [tasks, setTasks] = useState<Task[]>([])
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        getTasks()
            .then(result => {
                    setIsLoaded(true)
                    setTasks(result.data)
                },
                error => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    if (error) {
        return <div>Error: {error}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <ul>
                {tasks.map(task => {
                    return (
                        <Link key={task._id} to={`/tasks/${task._id}`}>
                            <li className='list'>
                                <span>{task.title}</span>
                                <span>{task.content}</span>
                            </li>
                        </Link>

                    )
                })}
            </ul>
        );
    }
}


export default TaskList;
