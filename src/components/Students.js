import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

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
							return +currentValue + +accumulator
						}) / student.grades.length

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
								<div className='grades-wrapper'>
									<ul className='grades-list'>
										{student.grades.map((grade, index) => {
											return (
												<li
													className='grade-item'
													key={index}
												>
													Test {(index += 1)}: {grade}
													%
												</li>
											)
										})}
									</ul>
								</div>
							</div>
							<div className='toggle-wrapper'>
								<button>
									<FontAwesomeIcon icon={faPlus} size='3x' />
								</button>
							</div>
						</li>
					)
				})}
			</ul>
		</div>
	)
}

export default Students
