import React, { useEffect, useState } from 'react';
import CardList from '../components/CardList';
// import {robots} from './robots';
import Scroll from '../components/Scroll'
import SearchBox from '../components/SearchBox';
import './App.css';
import ErrorBoundry from '../components/errorBoundry.js';

const App = () => {
	// constructor(){
	// 	super();
	// 	this.state = {
	// 		robots: [],
	// 		searchfield: ''
	// 	}
	// }

	const [robots, setRobots] = useState([]);
	const [searchfield, setSearchfield] = useState('');
	const [count, setCount] = useState(0);

	// componentDidMount(){
	// 	fetch('https://jsonplaceholder.typicode.com/users')
	// 		.then(response => response.json())
	// 		.then(users => {this.setState({robots : users})})
	// }

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users => { setRobots(users) })
		console.log(count);
	}, [count]);

	const onSearchChange = (event) => {
		setSearchfield(event.target.value)
	}

	const filteredRobots = robots.filter(robot => {
		return robot.name.toLowerCase().includes(searchfield.toLowerCase())
	});
	return !robots.length ?
		<h1>Loading...</h1>
		: (
			<div className='tc'>
				<h1 className='f1'>Robo Friends</h1>
				<button onClick={() => setCount(count + 1)}>Click Me</button>
				<SearchBox searchChange={onSearchChange} />
				<Scroll>
					<ErrorBoundry>
						<CardList robots={filteredRobots} />
					</ErrorBoundry>
				</Scroll>
			</div>
		);
}

export default App;