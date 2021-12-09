import React from 'react';
import './button.styles.css';

const Button = ({ msg, handleChange, active }) => {
	return (
		<div
			className={`noselect button ${active ? 'active' : ''}`}
			onClick={handleChange}
		>
			{msg}
		</div>
	);
};

export default Button;
