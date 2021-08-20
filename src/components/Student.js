import { useState, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'

const Student = ({ student, averageGrade }) => {
	const [isHidden, setIsHidden] = useState(true)
	const gradesRef = useRef()

	const toggle = () => {
		setIsHidden(!isHidden)
	}

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
					<li>Average: {averageGrade.toFixed(3)}%</li>
				</ul>
				<div
					className='grades-wrapper'
					style={
						isHidden
							? { height: `0px` }
							: { height: `${gradesRef.current.scrollHeight}px` }
					}
					ref={gradesRef}
					aria-hidden={isHidden}
				>
					<ul className='grades-list'>
						{student.grades.map((grade, index) => {
							return (
								<li className='grade-item' key={index}>
									Test {(index += 1)}: {grade}%
								</li>
							)
						})}
					</ul>
				</div>
			</div>
			<div className='toggle-wrapper'>
				<button className='toggle' onClick={toggle}>
					{!isHidden ? (
						<FontAwesomeIcon icon={faMinus} size='3x' />
					) : (
						<FontAwesomeIcon icon={faPlus} size='3x' />
					)}
				</button>
			</div>
		</li>
	)
}
export default Student
