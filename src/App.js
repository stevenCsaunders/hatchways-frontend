import { useState, useEffect } from 'react'
import Students from './components/Students'

function App() {
	const baseURL = `https://api.hatchways.io/assessment/students/`
	const [students, setStudents] = useState([])
	const [search, setSearch] = useState('')
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await fetch(baseURL, {
					method: 'GET',
				})
				const data = await res.json()
				setStudents(data[`students`])
				setIsLoading(false)
			} catch (err) {
				console.error(err)
			}
		}
		fetchData()
	}, [baseURL])

	const filteredStudents = [...students].filter((student) =>
		student.firstName.toLowerCase().includes(search) ||
		student.lastName.toLowerCase().includes(search)
			? student
			: null
	)

	const handleChange = (e) => {
		setSearch(e.target.value.toLowerCase())
	}
	return (
		<div className='app'>
			<main>
				{isLoading ? (
					<div>Loading...</div>
				) : (
					<Students
						filteredStudents={filteredStudents}
						handleChange={handleChange}
            search={search}
					/>
				)}
			</main>
		</div>
	)
}

export default App
