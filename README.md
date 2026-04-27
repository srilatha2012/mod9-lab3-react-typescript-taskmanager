# React + TypeScript + Vite

# Task Manager App

This project is a React +TypeScript Task Manager application built using component composition, statemanagement, conditional rendering, and list rendering

The application allows users to:

- View a list of tasks
- update task status
- Delete tasks
- Filter tasks by status and priority
- Display visual Feedback based on task properties

## Technogoies used
 - React
 - Typescript
 - Vite
 - Tailwind CSS

 ## Component Implementations
 App component

 That parent component that manages the main application state using useState.

 Responsibilities:
 - Stores all tasks
 - Stores active filters
 - Handles task status updates
 - Handle task deletion 
 - Filters tasks by status and priority
 - Passes Props to child components

 ## TaskList Component
 Responsible for rendering all tasks using .map().

Responsibilities:
 - Receives task list as props
 - Uses unique key prop for each task
 - Render multiple TaskItem componets

 ## TaskItem Component
 Responsible for displaying a single task

 Responsibilites:
 - Display titel, description, status, priority, and due date
 - Allows changing task status
 - Allows deleting a task
 - Uses conditional rendering for UI feedback

 ## TaskFilfter component
 Responsibile for filtering tasks.

 Responsibiltites
 - Filter by status
 - Filter by priority
 - Sends filter values back to parent using callback props

## Example Usage with Documentation
Example Usage in APP.tsx
<TaskFilter onFilterChange={setFilters} />

<TaskList
  tasks={filteredTasks}
  onStatusChange={handleStatusChange}
  onDelete={handleDelete}
/>

## How component communcation works 
Parent to child
Data is passed using props:

<TaskList tasks={filteredTasks} />

Child to parent
Child components communicate back using callback functions:

onStatusChange(task.id, newStatus)
This flows Reacts's callback pattern

## State Management
I used useState hook to manage
- Task list
- Filter values

when task status changes:
 setTasks() - is used to update only the matching task using .map()

 when deleting task
 filter() - is used to remove the selected task.

 ## Conditional rendering
 Conditional rendering is used for
  - Task status display
  - Priority-based styles
  - Empty filter behavior

  task.status === "completed"


## Reflection

1. How did you ensure unique keys for your list items?
I used each task's id as the key when rendering the task list with .map(). 

2. What considerations did you make when implementing the filtering functionality?
I made sure users could filter tasks by status and priority. If no filter is selected, all tasks are shown 

3. How did you handle state updates for task status changes?
I used setTasks() and .map() to create a new updated task list.If the task id matched, I updated only that task's stattus

4. What challenges did you face when implementing conditional rendering?
One challenge was showing different styles based on task status and priority. I handled this by using conditional class names