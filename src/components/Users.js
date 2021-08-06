import { useState, useEffect } from 'react'

const Users = () => {
	const baseURL = `https://api.hatchways.io/assessment/students/`
	const [students, setStudents] = useState([])
	const [search, setSearch] = useState('')
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await fetch(baseURL, {
          'method': 'GET'
        })
				const data = await res.json()
				setStudents(data.students)
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

	console.log(filteredStudents)

	return (
		<main>
			{isLoading ? <div>Loading...</div> : null}
			<input
				type='text'
				value={search}
				placeholder='Search Students'
				onChange={handleChange}
			/>

			<div>
				<ul>
					{filteredStudents.map((student) => {
						return (
							<li key={student.id}>
								<img src={student.pic} alt={`${student.firstName} profile pic`} /> {student.firstName} {student.lastName}
							</li>
						)
					})}
				</ul>
			</div>
		</main>
	)
}

export default Users
