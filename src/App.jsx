import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component.jsx';
import { SearchBox } from './components/search-box/search-box.component.jsx';

import './App.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			monsters: [],
			searchField: '',
		};
	}

	componentDidMount() {
		//Runs whenever component is mounted or rendered
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((res) => res.json())
			.then((users) => this.setState({ monsters: users }));
	}

	render() {
		const { monsters, searchField } = this.state;
		const filteredMonsters = monsters.filter((monster) =>
			monster.name.toLowerCase().includes(searchField.toLowerCase())
		);
		return (
			<div className='App text-center'>
				<h1>Monster Pokedex</h1>
				<SearchBox
					placeHolder='Search Monsters'
					handleChange={(e) => this.setState({ searchField: e.target.value })}
				/>
				<CardList monsters={filteredMonsters} />
			</div>
		);
	}
}

export default App;
