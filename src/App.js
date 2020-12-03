import React, {Component} from 'react';
import Cardlist from './Cardlist';
import SearchBox from './SearchBox';
import Scorll from './Scorll';
// import { Animename } from './Animename';
import './App.css';


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
						<Cardlist Animename={fillterAnime}/>
					</Scorll>
				</div>
			);
		}
	}
}

export default App;