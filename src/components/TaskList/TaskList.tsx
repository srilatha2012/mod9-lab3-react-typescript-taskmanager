import type { TaskListProps } from "../../types"
import { TaskItem } from "../TaskItem/TaskItem"


export function TaskList({ tasks, onStatusChange, onDelete }: TaskListProps) {
    return (
        <div className="space-y-4">
            {tasks.map((task) => (
                <TaskItem
                    key={task.id}
                    task={task}
                    onStatusChange={onStatusChange}
                    onDelete={onDelete}
                />
            ))}
        </div>
    )

}

