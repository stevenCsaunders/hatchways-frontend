
import Student from  './Student.js'

const Students = ({ search, filteredStudents, handleChange }) => {

	return (
		<div className='student-search-wrapper'>
			<input
				className='search-input'
				type='text'
				value={search}
				placeholder='Search by name'
				onChange={handleChange}
			/>
			<ul className='student-list'>
				{filteredStudents.map((student) => {
					const averageGrade =
						student.grades.reduce((accumulator, currentValue) => {
							return ((+currentValue) + (+accumulator))
						}) / student.grades.length
					return (
						<Student key={student.id} averageGrade={averageGrade} student={student} />
					)
				})}
			</ul>
		</div>
	)
}

export default Students

