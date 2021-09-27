import { useEffect } from "react";
import { useTasks, useSetTasks } from "../../hooks/useTasks"
import { ITask, supabase } from "../../hooks/useSupabase";
import TaskItem from "../taskItem";

const TaskList = () => {
	const { tasks } = useTasks();
	const { setTasks } = useSetTasks();

	useEffect(() => {
		const myTasksSubscription = supabase
			.from<ITask>('tasks')
			.on('INSERT', payload => {
				setTasks((prev: ITask[]) => [payload.new, ...prev])
			})
			.subscribe()

		return () => {
			supabase.removeSubscription(myTasksSubscription)
		}
	}, [])

	return (
		<div className="px-5 py-2">
			{tasks.map((task: ITask) => <TaskItem key={task.id} id={task.id} content={task.content} />)}
		</div>
	)
}

export default TaskList