import { ITask } from "../../hooks/useSupabase"

const TaskItem = ({ content }: ITask) => {
	const renderContent = (content: string) => {
		let emailsCount = 1;
		let linksCount = 1;
		const arr = content.split(" ").map((i) => {
			if (i.startsWith("#")) {
				return `<span class="text-purple-600 bg-purple-200 pb-[1px] px-2 rounded-2xl inline-block cursor-pointer">${i}</span>`;
			}
			if (i.startsWith("@")) {
				return `<span class="text-green-600 bg-green-200 pb-[1px] px-2 rounded-2xl inline-block cursor-pointer">${i}</span>`;
			}
			if (i.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
				return `<a href="mailto:${i}" class="text-yellow-600 bg-yellow-200 pb-[1px] px-2 rounded-2xl inline-block cursor-pointer">
					<div class="flex items-center space-x-1">
						<svg style="width: 16px; height: 16px;" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
						</svg> 
						<div>Mail ${emailsCount++}</div> 
					</div>
				</a>`;
			}
			if (i.match(/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/)) {
				return `<a href="${i}" target="_blank" rel="noopener noreferer" class="text-blue-600 bg-blue-200 pb-[1px] px-2 rounded-2xl inline-block cursor-pointer">
					<div class="flex items-center space-x-1">
						<svg style="width: 16px; height: 16px;" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
						</svg> 
						<div>Link ${linksCount++}</div>
					</div>
				</a>`;
			}
			return i;
		});

		return arr.join(" ");
	}

	return (
		<div className="w-full py-2 flex space-x-4 items-center">
			<input className="form-checkbox" type="checkbox" name="" id="" />
			<div className="" dangerouslySetInnerHTML={{ __html: renderContent(content) }} />
		</div>
	)
}

export default TaskItem