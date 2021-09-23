import { useTasks } from "../../hooks/useTasks"
import { ITask } from "../../hooks/useSupabase";
import TaskItem from "../taskItem";

const TaskList = () => {
	const { tasks } = useTasks();

	return (
		<div className="px-5 py-2">
			{tasks.map((task: ITask) => <TaskItem key={task.id} id={task.id} content={task.content} />)}
		</div>
	)
}

export default TaskList