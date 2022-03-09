import React, {FormEvent, FunctionComponent, useState} from 'react';
import {Task} from "./TaskDetail";
import {createTask} from "../adapters/taskList.adapter";

interface OwnProps {
}

type Props = OwnProps;

const AddTask: FunctionComponent<Props> = (props) => {

    const [formData, setFormData] = useState({
        header: '',
        content: '',
        dateToFinish: '',
        isFinished: false
    })

    const {header, content, dateToFinish} = formData

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData((prevState) => ({
                ...prevState,
                [e.target.name]: e.target.value
            })
        )
    }

    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (!header) {
            alert('Please fill in the name')
            return
        }

        const newTask: Task = {
            isFinished: false,
            title: header,
            content: content,
            dateToFinish: dateToFinish
        }
        createTask(newTask).then()
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-group'>
                <div className='form-control'>
                    <label>Task</label>
                    <input type='text' placeholder='Add task' name='header' value={header}
                           onChange={onChange}
                    />
                </div>
                <div className='form-control'>
                    <label>Details</label>
                    <input type='textarea' placeholder='Describe in more detail'
                           value={content}
                           name='content'
                           onChange={onChange}
                    />
                </div>
                <div className='form-control'>
                    <label>When it should be finished?</label>
                    <input type='datetime-local'
                           value={dateToFinish}
                           name='dateToFinish'
                           onChange={onChange}
                    />
                </div>
                <input className='btn btn-block' type='submit' value='Save task'/>
            </div>
        </form>
    );
};

export default AddTask;
