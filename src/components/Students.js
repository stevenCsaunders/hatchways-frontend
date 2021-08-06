
const Students = ({ search, filteredStudents, handleChange }) => {

	return (
		<main>
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

export default Students
