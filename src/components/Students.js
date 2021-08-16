import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'

const Students = ({ search, filteredStudents, handleChange }) => {
	const [isHidden, setIsHidden] = useState(true)

	const toggle = () => {
		setIsHidden(!isHidden)
	}

	return (
		<div className='student-search-wrapper'>
			<input
				className='search-input'
				type='text'
				value={search}
				placeholder='Search by name'
				onChange={handleChange}
			/>
			<ul className='student-list scroll'>
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
								<h3 className='student-name'>
									{student.firstName} {student.lastName}
								</h3>
								<ul className='student-info'>
									<li>Email: {student.email}</li>
									<li>Compnay: {student.company}</li>
									<li>Skill: {student.skill}</li>
									<li>Average: {averageGrade.toFixed(3)}</li>
								</ul>
								<div
									className='grades-wrapper'
									hidden='true'
									aria-hidden='true'
								>
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
								<div className='toggle-wrapper'>
									<button onClick={toggle}>
										{isHidden === true ? (
											<FontAwesomeIcon
												icon={faPlus}
												size='3x'
											/>
										) : (
											<FontAwesomeIcon
												icon={faMinus}
												size='3x'
											/>
										)}
									</button>
								</div>
							</div>
						</li>
					)
				})}
			</ul>
		</div>
	)
}

export default Students