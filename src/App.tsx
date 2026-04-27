import { useState } from 'react'
import './App.css'
import type { Task, TaskStatus } from './types'
import { TaskFilter } from './components/TaskFilter/TaskFilter';
import { TaskList } from './components/TaskList/TaskList';

function App() {
  
const [tasks, setTasks] = useState<Task[]>([
  {
    id : "1",
    title : "Completed React Lab",
    description : "Finish task manager component lab",
    status: "pending",
    priority: "high",
    dueDate : "2026-04-30"
  },
  {
    id : "2",
    title : "Review TypeScript",
    description : "Practice interfaces and props",
    status: "in-progress",
    priority: "medium",
    dueDate : "2026-05-30"
  },
  {
    id : "3",
    title : "Submitted assignment",
    description : "Push project to GitHub",
    status: "completed",
    priority: "low",
    dueDate : "2026-06-30"
  }

]);

const [filters, setFilters] = useState<{
  status?: TaskStatus;
  priority ?: 'low' | 'medium' | 'high'

}>({});

function handleStatusChange(taskId: string, newStatus: TaskStatus) {
  setTasks((prevTasks) =>
    prevTasks.map((task) => 
     task.id === taskId ? { ...task, status: newStatus} : task))
}

function handleDelete(taskId: string) {
    setTasks((prevTasks) =>
    prevTasks.filter((task) => 
     task.id !== taskId ))
}

const filteredTasks = tasks.filter((task) => {

  const statusMatch = !filters.status || task.status  === filters.status;
  const priorityMatch = 
     !filters.priority || task.priority === filters.priority;
     return statusMatch && priorityMatch;
})

  return (
    <main className='min-h-screen bg-gray-100 p-6'>
    <div className='max-w-4xl mx-auto bg-white p-6 rounded-lg shadow'>
    <h1 className='text-3xl font-bold mb-6'>Task Manager</h1>
    <TaskFilter onFilterChange={setFilters}/>
    <div className='mt-6'>
    <TaskList
      tasks = {filteredTasks}
      onStatusChange = {handleStatusChange}
      onDelete = {handleDelete}
    />
    </div>
    </div>
    </main>
  )
}

export default App
