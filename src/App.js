import { useState, useEffect } from 'react'
import Students from './components/Students'

function App() {
	const baseURL = `https://api.hatchways.io/assessment/students/`
	const [students, setStudents] = useState([])
	const [nameSearch, setNameSearch] = useState('')
	const [tagSearch, setTagSearch ] = useState('')
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

	const handleNameSearch = (e) => {
		setNameSearch(e.target.value.toLowerCase())
	}
	const handleTagSearch = (e) => {
		setTagSearch(e.target.value.toLowerCase())
	}

	return (
		<div className='app'>
			<main>
				{isLoading ? (
					<div>Loading...</div>
				) : (
					<Students
						students={students}
						handleNameSearch={handleNameSearch}
						handleTagSearch={handleTagSearch}
						nameSearch={nameSearch}
						tagSearch={tagSearch}
					/>
				)}
			</main>
		</div>
	)
}

export default App
