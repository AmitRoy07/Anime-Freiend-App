import React, {Component} from 'react';
import {connect} from 'react-redux';
import Cardlist from '../component/Cardlist';
import SearchBox from '../component/SearchBox';
import Scorll from '../component/Scorll';
// import { Animename } from './Animename';
import './App.css';
import ErrorBoundry from './ErrorBoundry';

import {setSearchField} from '../action.js';

const mapStateProps = state => {
	return{
		searchField: state.searchField
	}
}

const mapDispatchToProps = (dispatch) =>{
	return{
		onSearchChange: (event) => dispatch(setSearchField(event.target.value))
	}
}

class App extends Component { 
	constructor(){
		super()
		this.state = {
			Animename: [],
			searchfield: '',
		}
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(users => this.setState({ Animename: users }));
	}

	onSearchChange = (e) => {
    	this.setState({ searchfield: e.target.value })
  	};
	render(){
		const fillterAnime = this.state.Animename.filter(Animename =>{
			return Animename.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
		})
		if (this.state.Animename.length === 0) {
			return <h1 className="tc">Loading</h1>
		}else{
			return (
				<div className="tc fontsz">
					<h1>AnimeFriends</h1>
					<SearchBox searchChange={this.onSearchChange}/>
					<Scorll>
						<ErrorBoundry>
							<Cardlist Animename={fillterAnime}/>
						</ErrorBoundry>
					</Scorll>
				</div>
			);
		}
	}
}

export default connect(mapStateProps, mapDispatchToProps)(App);