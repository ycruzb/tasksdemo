import CustomButtom from "../customButton"
import { addTask } from "../../hooks/useSupabase"

interface IProps {
	show: boolean,
	taskContent?: string,
	emptyTaskContent: Function
}

const TaskActionBar = ({ show, taskContent = "", emptyTaskContent }: IProps) => {
	const parentClasses = show ? "flex rounded-t-none rounded-b-md w-full justify-between px-4 py-2 bg-gray-100 border-t-[1px] border-gray-150 absolute shadow-md" : "hidden w-full px-3 py-2 bg-gray-100 border-t-[1px] border-gray-15 absolute"

	const addTaskHandle = async () => {
		if (taskContent !== "") {
			const { error, task } = await addTask(taskContent);
			if (!error) {
				emptyTaskContent();

			} else {
				console.log("Error: ", error.message)
			}
		}
	}

	return (
		<div className={parentClasses}>
			<div className="flex space-x-5">
				<div className="">
					<CustomButtom type="secondary" text="Open" disabled={taskContent === ""} icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
					</svg>} />
				</div>
				<div className="flex space-x-1">
					<CustomButtom type="link" text="Today" disabled={taskContent === ""} icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
					</svg>} />
					<CustomButtom type="link" text="Public" disabled={taskContent === ""} icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
					</svg>} />
					<CustomButtom type="link" text="Normal" disabled={taskContent === ""} icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
					</svg>} />
					<CustomButtom type="link" text="Estimation" disabled={taskContent === ""} icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
					</svg>} />
				</div>
			</div>
			<div className="flex space-x-1">
				<CustomButtom type="secondary" text="Cancel" action={emptyTaskContent} />
				<CustomButtom type="primary" text={taskContent !== "" ? "Add" : "OK"} action={addTaskHandle} />
			</div>
		</div>
	)
}

export default TaskActionBar