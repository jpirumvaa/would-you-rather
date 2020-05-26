import React from 'react'

const Progress = ({score}) => {
	const [style, setStyle] = React.useState({});
	
	setTimeout(() => {
		const newStyle = {
			opacity: 1,
			width: `${score}%`
		}
		
		setStyle(newStyle);
	}, 200);
	
	return (
		<div className="progress">
			<div className="progress-score" style={style}>
				{score}%
			</div>
		</div>
	)
}

export default Progress