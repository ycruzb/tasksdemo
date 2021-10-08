import { useState, useRef, useEffect } from "react"
import TaskActionBar from "../taskActionBar"
import { addTask } from "../../hooks/useSupabase"

const AddTask = () => {
	const [content, setContent] = useState("");
	const inputEl = useRef<HTMLInputElement>(null);
	const [hasFocus, setFocus] = useState(false);

	useEffect(() => {
		if (document.hasFocus() && inputEl.current) {
			if (inputEl.current.contains(document.activeElement)) {
				setFocus(true);
			}
		}
	}, []);

	const emptyTaskContent = () => {
		setContent("");
	}

	const renderContent = () => {
		const arr = content.split(" ").map((i) => {
			if (i.startsWith("#")) {
				return `<span class="text-purple-600">${i}</span>`;
			}
			if (i.startsWith("@")) {
				return `<span class="text-green-600">${i}</span>`;
			}
			if (i.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
				return `<span class="text-yellow-600">${i}</span>`;
			}
			if (i.match(/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/)) {
				return `<span class="text-blue-600">${i}</span>`;
			}
			return i;
		});

		return arr.join(" ");
	}

	const addTaskHandle = async () => {
		if (content !== "") {
			const { error, task } = await addTask(content);
			if (!error) {
				emptyTaskContent();

			} else {
				console.log("Error: ", error.message)
			}
		}
	}

	const parentClasses = hasFocus ? "w-full group rounded-t-md rounded-b-none border-[1px] border-white shadow-md border-gray-100 relative" : "w-full group rounded-md border-[1px] border-white relative"

	return (
		<div className={parentClasses}>
			<div className="w-full flex space-x-2 items-center px-3 py-2">
				<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
				</svg>

				<div className="w-full relative">
					{<div className="w-full min-h-[24px]" dangerouslySetInnerHTML={{ __html: renderContent() }} />}{" "}
					<textarea value={content} onChange={(e) => setContent(e.target.value)} onFocus={() => setFocus(true)} onBlur={() => setTimeout(() => setFocus(false), 50)} className="w-full border-none outline-none absolute top-0 left-0 opacity-30 cursor-text placeholder-gray-800 resize-none" placeholder="Type to add new task" onKeyPress={e => {
						if (e.key === 'Enter') {
							e.preventDefault()
							addTaskHandle();
						}
					}} />
				</div>

				<svg xmlns="http://www.w3.org/2000/svg" className={!hasFocus ? "h-10 w-10 text-blue-600 opacity-0" : content !== "" ? "h-10 w-10 text-blue-600" : "h-10 w-10 text-blue-600 opacity-50"} viewBox="0 0 20 20" fill="currentColor">
					<path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
				</svg>
			</div>
			<TaskActionBar show={hasFocus} taskContent={content} emptyTaskContent={emptyTaskContent} />
		</div>
	)
}

export default AddTask