import type { TaskItemProps, TaskStatus } from "../../types"

export function TaskItem({ task, onStatusChange, onDelete }: TaskItemProps) {

    return (
        <div className="border rounded-lg p-4 shadow-sm">
            <h2 className="font-bold">{task.title}</h2>
            <p>{task.description}</p>
            <p>Status: {task.status}</p>
            <p>Priority: {task.priority}</p>
            <p>Due: {task.dueDate}</p>

            <select
                value={task.status}
                onChange={(e) => onStatusChange(task.id, e.target.value as TaskStatus)}>
                <option value="Pending">Pending</option>
                <option value="In-Progress">In Progress</option>
                <option value="completed">Completed</option>
            </select>
            <button onClick={() => onDelete(task.id)}>Delete</button>
        </div>
    )
}