const Grades = ({ gradesRef, isHidden, student }) => {
	return (
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
	)
}

export default Grades
