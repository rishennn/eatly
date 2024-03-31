import React, { useState } from 'react'
import {ReactComponent as Plus} from '../../../assets/img/svg/Plus.svg'

function QuestionItem({question, answer}) {
	const [active, setActive] = useState(false)
	return (
		<div onClick={() => setActive(!active)} className='questionItem'>
			<div className="question">
				<b>{question}</b>
				<Plus />
			</div>
			{active && <p>{answer}</p>}
		</div>
	)
}

export default QuestionItem