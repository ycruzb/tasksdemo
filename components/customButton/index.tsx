export interface IProps {
	type: "primary" | "secondary" | "link",
	icon?: JSX.Element | boolean,
	text?: string,
	disabled?: boolean,
	action?: Function
}

const CustomButtom = ({ type = "primary", icon = false, text = "", disabled = false, action = () => { } }: IProps) => {
	const baseClasses = "px-4 py-2 rounded text-sm transition-all duration-150"
	let buttonClasses;

	if (type === "primary") {
		buttonClasses = !disabled ? `${baseClasses} border-[1px] border-blue-600 bg-blue-600 text-white opacity-100` : `${baseClasses} border-[1px] border-blue-600 bg-blue-600 text-white opacity-50`
	} else
		if (type === "secondary") {
			buttonClasses = !disabled ? `${baseClasses} border-[1px] border-gray-400 bg-gray-400 text-gray-800 opacity-100` : `${baseClasses} border-[1px] border-gray-400 bg-gray-400 text-gray-800 opacity-50`
		} else
			if (type === "link") {
				buttonClasses = !disabled ? `${baseClasses} border-[1px] border-gray-300 text-gray-500 opacity-100` : `${baseClasses} border-[1px] border-gray-300 text-gray-500 opacity-50`
			}

	return (
		<button className={buttonClasses} disabled={disabled} onClick={() => action()}> {icon} <span className={(icon) ? "hidden xl:inline-block" : "inline-block"}> {text}</span></button >
	)
}

export default CustomButtom