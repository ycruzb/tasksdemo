import { useEffect } from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import { useSetTasks } from "../hooks/useTasks"
import { getTasks } from "../hooks/useSupabase"

interface IProps {
	children: React.ReactNode
}

const Layout = ({ children }: IProps) => {
	const { setTasks } = useSetTasks();

	const getAllTasks = async () => {
		const { error, tasks } = await getTasks();
		if (error) {
			console.log("Error: ", error.message);
		} else {
			setTasks(tasks)
		}

	}

	useEffect(() => {
		getAllTasks();
	}, [])

	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	)
}

export default Layout