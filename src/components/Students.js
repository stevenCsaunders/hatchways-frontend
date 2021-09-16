import { useRef } from 'react'
import Student from './Student.js'

const Students = ({
	nameSearch,
	tagSearch,
	students,
	handleNameSearch,
	handleTagSearch,
}) => {
	const nameInputRef = useRef(null)
	const tagInputRef = useRef(null)

	const studentFilter = () => {
		const nameFilter = students.filter((student) =>
			student.firstName.toLowerCase().includes(nameSearch) ||
			student.lastName.toLowerCase().includes(nameSearch)
				? student
				: null
		)
		const tagFilter = nameFilter.filter((student) =>
			student.tags.some((tag) =>
				tag.toLowerCase().includes(tagSearch) ? student : null
			)
				? student
				: null
		)
		if (document.activeElement === tagInputRef.current && tagInputRef.current.value !== '') {
			return tagFilter
		} 
		return nameFilter
	}

	const filteredStudents = studentFilter().map((student) => {
		const averageGrade =
			student.grades.reduce((accumulator, currentValue) => {
				return +currentValue + +accumulator
			}) / student.grades.length

		return (
			<Student
				key={student.id}
				averageGrade={averageGrade}
				student={student}
			/>
		)
	})

	return (
		<div className='student-search-wrapper'>
			<input
				ref={nameInputRef}
				className='search-input'
				type='text'
				value={nameSearch}
				placeholder='Search by name'
				onChange={handleNameSearch}
			/>
			<input
				ref={tagInputRef}
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
