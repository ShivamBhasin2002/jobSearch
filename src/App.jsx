import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';

import JobPortal from './pages/jobPortal/jobPortal.component.jsx';
export default class App extends Component {
	render() {
		return (
			<div>
				<Routes>
					<Route exact path='/' element={<JobPortal />} />
				</Routes>
			</div>
		);
	}
}
