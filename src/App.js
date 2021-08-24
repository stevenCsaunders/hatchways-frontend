import { useState, useEffect } from 'react'
import Students from './components/Students'

function App() {
	const baseURL = `https://api.hatchways.io/assessment/students/`
	const [students, setStudents] = useState([])
	const [nameSearch, setNameSearch] = useState('')
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
		student.firstName.toLowerCase().includes(nameSearch) ||
		student.lastName.toLowerCase().includes(nameSearch)
			? student
			: null
	)

	const handleChange = (e) => {
		setNameSearch(e.target.value.toLowerCase())
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
            search={nameSearch}
					/>
				)}
			</main>
		</div>
	)
}

export default App
