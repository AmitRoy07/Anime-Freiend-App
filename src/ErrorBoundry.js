import React, {Component} from 'react';

class ErrorBoundry extends Component{
	constructor(props){
		super(props)
		this.state = {
			hasError: false
		}
	}

	ComponentDidCatch(Error , info){
		this.setstate({ hasError: true })
	}


	render(){
		if (this.state.ErrorBoundry){
			return <h1> opps file has some Error</h1>;
		}
		return this.props.children
	}
}

export default ErrorBoundry;