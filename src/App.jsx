import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component.jsx';
import { SearchBox } from './components/search-box/search-box.component.jsx';

import './App.css';

const { jobs } = require('./api.json');

class App extends Component {
	constructor() {
		super();
		this.state = {
			jobs: jobs,
			title: '',
			category: '',
			jobType: '',
			sort: false,
			jobsPerPage: 20,
			currentPage: 1,
		};
	}

	findJobs = ({
		jobs,
		title,
		category,
		jobType,
		sort,
		currentPage,
		jobsPerPage,
	}) => {
		let filteredJobs = jobs.filter(
			(job) =>
				job.title.toLowerCase().includes(title.toLowerCase()) &&
				job.category.toLowerCase().includes(category.toLowerCase()) &&
				job.job_type.toLowerCase().includes(jobType.toLowerCase())
		);
		if (sort) filteredJobs.sort();
		filteredJobs = filteredJobs.slice(
			(currentPage - 1) * jobsPerPage,
			currentPage * jobsPerPage
		);
		return filteredJobs;
	};

	render() {
		const filteredJobs = this.findJobs(this.state);
		return (
			<div className='App text-center'>
				<h1>Job Portal</h1>
				<SearchBox
					placeHolder='Job Title'
					handleChange={(e) => this.setState({ title: e.target.value })}
					width='250px'
				/>
				<br />
				<SearchBox
					placeHolder='Category'
					handleChange={(e) => this.setState({ category: e.target.value })}
					width='150px'
				/>
				<SearchBox
					placeHolder='Job Type'
					handleChange={(e) => this.setState({ jobType: e.target.value })}
					width='150px'
				/>
				<CardList jobs={filteredJobs} />
			</div>
		);
	}
}

export default App;
