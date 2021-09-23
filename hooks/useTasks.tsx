import { createContext, useContext, useState } from "react";

type TasksProviderProps = { children: React.ReactNode }

const TasksContext = createContext<{ tasks: [] } | undefined>(undefined);
const SetTasksContext = createContext<{ setTasks: Function } | undefined>(undefined);

function TasksProvider({ children }: TasksProviderProps) {
	const [tasks, setTasks] = useState<[]>([])

	return (
		<TasksContext.Provider value={{ tasks }}>
			<SetTasksContext.Provider value={{ setTasks }}>{children}</SetTasksContext.Provider>
		</TasksContext.Provider>
	);
}

function useTasks() {
	const tasks = useContext(TasksContext);
	if (typeof tasks === "undefined") {
		throw new Error("useTasks must be used within a TasksContext");
	}
	return tasks;
}

function useSetTasks() {
	const setTasks = useContext(SetTasksContext);
	if (typeof setTasks === "undefined") {
		throw new Error(
			"useSetTasks must be used within a SetTasksContext"
		);
	}
	return setTasks;
}

export { TasksProvider, useTasks, useSetTasks };
