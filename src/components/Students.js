import Student from './Student.js'

const Students = ({
	nameSearch,
	tagSearch,
	students,
	handleNameSearch,
	handleTagSearch,
}) => {
	const nameFilter =
		students.filter((student) =>
			student.firstName.toLowerCase().includes(nameSearch) ||
			student.lastName.toLowerCase().includes(nameSearch)
				? student
				: null
		)


	//take value from tags input
	const tagFilter = 
			nameFilter.filter((student) => 
			student.tags.some((tag) => tag.toLowerCase().includes(tagSearch)
				? student
				: null
			)
			? student
			: null
		)
		
console.log(tagFilter)
	//search through tags based on the value
	//compare value of input to all tags
	//return student if tag has input value

	const filteredStudents = nameFilter.map((student) => {
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
