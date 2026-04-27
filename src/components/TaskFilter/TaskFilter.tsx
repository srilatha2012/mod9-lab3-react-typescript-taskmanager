import type { TaskFilterProps, TaskStatus } from "../../types"

export function TaskFilter({ onFilterChange }: TaskFilterProps) {

    return (
        <div className="flex gap-4">

            <select
                onChange={(e) =>
                    onFilterChange({
                        status: e.target.value === "" ? undefined : (e.target.value as TaskStatus),
                    })
                }>
                <option value="">All Status</option>
                <option value="pending">Pending</option>
                <option value="in-progress">In Progress</option>
                <option value="completed">Completed</option>
            </select>
            <select
                onChange={(e) =>
                    onFilterChange({
                        priority:
                            e.target.value === ""
                                ? undefined
                                : (e.target.value as "low" | "medium" | "high")
                    })

                } >
                <option value="">All Priority</option>
                <option value="pending">Low</option>
                <option value="in-progress">Medium</option>
                <option value="completed">High</option>

            </select>

        </div>
    )
}
