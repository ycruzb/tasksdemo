import '../styles/tailwind.css'
import type { AppProps } from 'next/app'
import { TasksProvider } from '../hooks/useTasks'
import Layout from '../layouts/layout'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<TasksProvider>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</TasksProvider>
		</>
	)
}
export default MyApp
