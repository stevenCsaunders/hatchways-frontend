
import Student from  './Student.js'

const Students = ({ nameSearch, filteredStudents, handleChange }) => {

	return (
		<div className='student-search-wrapper'>
			<input
				className='search-input'
				type='text'
				value={nameSearch}
				placeholder='Search by name'
				onChange={handleChange}
			/>
			<input
				className='search-input'
				type='text'
				value={nameSearch}
				placeholder='Search by tag'
				onChange={handleChange}
			/>
			<ul className='student-list'>
				{filteredStudents.map((student) => {
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
				})}
			</ul>
		</div>
	)
}

export default Students

