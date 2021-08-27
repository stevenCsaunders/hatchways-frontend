import Student from './Student.js'
import { useState } from 'react'

const Students = ({
	nameSearch,
	tagSearch,
	students,
	handleNameSearch,
	handleTagSearch,
}) => {
	const [tags, setTags] = useState([])

	const studentsFilter = [
		...students.filter((student) =>
			student.firstName.toLowerCase().includes(nameSearch) ||
			student.lastName.toLowerCase().includes(nameSearch)
				? student
				: null
		),
	]

	const handleTag = (e) => {
		if (e.key === 'Enter' && e.target.value) {
			setTags([...tags, e.target.value])
			e.target.value = ''
		}
	}

	const handleDelete = (index) => {
		setTags([
			...tags.filter((tag) => {
				return tags.indexOf(tag) !== index
			}),
		])
	}

	const filteredStudents = studentsFilter.map((student) => {
		const averageGrade =
			student.grades.reduce((accumulator, currentValue) => {
				return +currentValue + +accumulator
			}) / student.grades.length
		return (
			<Student
				key={student.id}
				averageGrade={averageGrade}
				student={student}
				handleTag={handleTag}
				handleDelete={handleDelete}
				tags={tags}
			/>
		)
	})

	return (
		<div className='student-search-wrapper'>
			<input
				className='search-input'
				type='text'
				value={nameSearch}
				placeholder='Search by name'
				onChange={handleNameSearch}
			/>
			<input
				className='search-input'
				type='text'
				value={tagSearch}
				placeholder='Search by tag'
				onChange={handleTagSearch}
			/>
			<ul className='student-list'>{filteredStudents}</ul>
		</div>
	)
}

export default Students
