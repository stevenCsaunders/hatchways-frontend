const Students = ({ search, filteredStudents, handleChange }) => {
	return (
		<div className='student-search-wrapper'>
			<input
				type='text'
				value={search}
				placeholder='Search Students'
				onChange={handleChange}
			/>
			<ul className='student-list'>
				{filteredStudents.map((student) => {
					const averageGrade = student.grades.reduce(
						(accumulator, currentValue) => {
							return +currentValue + +accumulator 
				})  / student.grades.length

					return (
						<li className='student-item' key={student.id}>
							<div className='image-wrapper'>
								<img
									className='student-avatar'
									src={student.pic}
									alt={`${student.firstName} profile pic`}
								/>
							</div>
							<div className='info-wrapper'>
								<h3 className='student-content'>
									{student.firstName} {student.lastName}
								</h3>
								<ul>
									<li>{student.email}</li>
									<li>{student.company}</li>
									<li>{student.skill}</li>
									<li>{averageGrade.toFixed(3)}</li>
								</ul>
							</div>
						</li>
					)
				})}
			</ul>
		</div>
	)
}

export default Students
