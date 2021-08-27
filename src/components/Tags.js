import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

const Tags = ({ tags, handleDelete, handleTag }) => {
	return (
		<div className='tag-wrapper'>
			<ul className='tag-list'>
				{tags.map((tag, index) => (
					<li key={index}>
						<span>{tag}</span>
						<FontAwesomeIcon
							icon={faTimes}
							size='sm'
							onClick={() => handleDelete(index)}
						/>
					</li>
				))}
			</ul>
			<input
				className='tag-input'
				placeholder='Add tag'
				type='text'
				onKeyUp={(e) => handleTag(e)}
			/>
		</div>
	)
}

export default Tags
