import React, { Component } from 'react';
import CardList from './components/card-list/card-list.component.jsx';
import SearchBox from './components/search-box/search-box.component.jsx';
import Button from './components/button/button.component.jsx';

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
		if (sort) {
			filteredJobs.sort((a, b) => {
				if (a.title.toLowerCase() < b.title.toLowerCase()) {
					return -1;
				}
				if (a.title.toLowerCase() > b.title.toLowerCase()) {
					return 1;
				}
				return 0;
			});
		}
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
				<div className='modifications'>
					<span>
						<Button
							msg='Prev'
							active='false'
							handleChange={(e) =>
								this.setState({
									currentPage:
										this.state.currentPage === 1 ? 1 : --this.state.currentPage,
								})
							}
						/>
					</span>
					<span>
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
						<Button
							msg='Sort'
							active={this.state.sort}
							handleChange={(e) => {
								this.setState({ sort: !this.state.sort });
							}}
						/>
					</span>
					<span>
						<Button
							msg='Next'
							active='false'
							handleChange={(e) =>
								this.setState({
									currentPage: ++this.state.currentPage,
								})
							}
						/>
					</span>
				</div>
				<CardList jobs={filteredJobs} />
			</div>
		);
	}
}

export default App;
