import './App.css'
import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import TaskList from "./pages/TaskList";
import TaskDetail from "./pages/TaskDetail";
import AddTask from "./pages/AddTask";
import {Navigation} from "./components/Navigation";
import {QueryClient, QueryClientProvider} from "react-query";

const queryClient = new QueryClient()

function App() {

    return (
            <Router>
                    <Navigation/>
                    <div className='container mt-3'>
                        <Routes>
                            <Route path='/' element={<TaskList/>}/>
                            <Route path='/tasks' element={<TaskList/>}/>
                            <Route path='/tasks/:id' element={<TaskDetail/>}/>
                            <Route path='/tasks/add' element={<AddTask/>}/>
                        </Routes>
                    </div>
            </Router>
    )
}

export default App
