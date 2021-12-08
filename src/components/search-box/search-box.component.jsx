import React from 'react';
import './search-box.styles.css';

const SearchBox = ({ placeHolder, handleChange, width }) => (
	<input
		className='search'
		type='search'
		placeholder={placeHolder}
		onChange={handleChange}
		style={{ width: width }}
	/>
);

export default SearchBox;
