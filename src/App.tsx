import {useState} from 'react'
import './App.css'
import {Header} from "./components/Header";
import TaskList from "./components/tasks/task-list/TaskList";
import {ID, Task} from "./components/tasks/task/TaskDetail";
import AddTask from "./components/AddTask";

function App() {
    const [tasks, setTasks] = useState([{
            id: 1,
            header: 'simple task',
            content: 'firstTask',
            isFinished: false,
            dateCreated: 0,
            dateToFinish: 0,
        },
            {
                id: 2,
                header: 'Nothing to do task',
                content: 'firstTask',
                isFinished: false,
                dateCreated: 0,
                dateToFinish: 0,
            },
        ]
    )

    // Delete task
    const deleteTask = (id: ID) => {
        console.log('delete', id)
        setTasks(tasks.filter((task) => task.id !== id))

    }

    const toggleFinished = (id: ID) => {
        setTasks(tasks.map((task) =>
            task.id === id ? {...task, isFinished: !task.isFinished} : task));
    }

    const addTask = (task: Task) => {
        const id: ID = Math.floor(Math.random() * 1000 + 1);
        const date = Date.now()
        const newTask: Task = {...task, id: id, dateCreated: date}
        setTasks([...tasks, newTask])
    }

    return (
        <div className="container">
            <Header title='Task Manager'/>
            <AddTask onAdd={addTask}/>
            {tasks.length ? <TaskList data={tasks} onDelete={deleteTask}
                                      onToggle={toggleFinished}
            /> : 'No tasks to show'}
        </div>
    )
}

export default App
