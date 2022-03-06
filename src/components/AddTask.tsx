import React, {FormEvent, FunctionComponent, useState} from 'react';
import {ID, Task} from "./tasks/task/TaskDetail";

interface OwnProps {
    onAdd(task: Task): void
}

type Props = OwnProps;

const AddTask: FunctionComponent<Props> = (props) => {

    const [header, setHeader] = useState('');
    const [content, setContent] = useState('');
    const [date, setDate] = useState(false);

    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (!header) {
            alert('Please fill in the name')
            return
        }

        const id: ID = Math.floor(Math.random() * 1000 + 1);

        const date = Date.now()

        const newTask: Task = {
            id: id,
            dateCreated: date,
            isFinished: false,
            header: header,
            content: content
        }

        props.onAdd(newTask)

        setDate(false);
        setHeader('');
        setContent('');
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Task</label>
                <input type='text' placeholder='Add task' value={header}
                       onChange={(e) => setHeader(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label>Details</label>
                <input type='textarea' placeholder='Describe in more detail'
                       value={content}
                       onChange={(e) => setContent(e.target.value)}
                />
            </div>
            <input className='btn btn-block' type='submit' value='Save task'/>
        </form>
    );
};

export default AddTask;
