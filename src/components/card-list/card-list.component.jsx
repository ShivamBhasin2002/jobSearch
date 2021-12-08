import React from 'react';
import Card from '../card/card.component.jsx';
import './card-list.styles.css';

const CardList = ({ jobs }) => (
	<div className='card-list'>
		{jobs.map((job) => (
			<Card key={job.id} {...job} />
		))}
	</div>
);

export default CardList;
