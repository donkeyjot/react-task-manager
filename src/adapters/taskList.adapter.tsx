import {create, find, get, getAll, remove, update} from "./xhr/index";
import {Task} from "../pages/TaskDetail";
import {AxiosPromise} from "axios";

export function getTasks(filter?: boolean): AxiosPromise<Task[]> {
    return getAll('/tasks')
}

export function getTask(id: string): AxiosPromise<Task>{
    return get('/tasks', id)
}

export function createTask(data: Task): AxiosPromise {
    return create('/tasks', data)
}

export function findTask(query: string, by: string = 'title'): AxiosPromise<Task[]> {
    return find('/tasks', query, by)
}

export function updateTask(id: string, newTask: Task): AxiosPromise<Task> {
    return update('/tasks', id, newTask)
}

export function deleteTask(id: string): AxiosPromise {
    return remove('/tasks', id)
}
