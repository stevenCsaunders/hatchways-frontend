import { useState, useRef } from 'react'
import Tags from './Tags'
import Grades from './Grades'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'

const Student = ({ student, averageGrade }) => {
	const [isHidden, setIsHidden] = useState(true)
	const [tags, setTags] = useState([])

	const gradesRef = useRef()

	const handleHide = () => setIsHidden(!isHidden)

	const handleTag = (e) => {
		if (e.key === 'Enter' && e.target.value) {
			setTags([...tags, e.target.value])
			e.target.value = ''
		}
	}

	const handleDelete = (index) => {
		setTags([
			...tags.filter((tag) => {
				return tags.indexOf(tag) !== index
			}),
		])
		student.tags = [...tags]
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
				<Grades
					gradesRef={gradesRef}
					isHidden={isHidden}
					student={student}
				/>
				<Tags
					tags={tags}
					handleTag={handleTag}
					handleDelete={handleDelete}
				/>
			</div>
			<div className='toggle-wrapper'>
				<button className='toggle' onClick={handleHide}>
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
