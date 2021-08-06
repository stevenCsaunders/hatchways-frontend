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
					return (
						<li className='student-item' key={student.id}>
							<img
								className='student-avatar'
								src={student.pic}
								alt={`${student.firstName} profile pic`}
							/>
							<h3 className='student-content'>
								{student.firstName} {student.lastName}
							</h3>
						</li>
					)
				})}
			</ul>
		</div>
	)
}

export default Students
