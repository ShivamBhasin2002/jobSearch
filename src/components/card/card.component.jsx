import React from 'react';
import './card.styles.css';

export const Card = ({ id, title, company_name }) => (
	<div className='card-container'>
		<h2>{title}</h2>
		<h5>{company_name}</h5>
	</div>
);
