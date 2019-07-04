// Code SimpleComponent Here
import React, {Component} from 'react'

class SimpleComponent extends Component {

	state = {
		mood: 'happy'
	}

	render() {
		return (
			<div onClick={this.handleClick} > {this.state.mood} </div>
		)
	}

	handleClick = ev => {
		this.setState(prevState => prevState.mood === 'happy' ? {mood: 'sad'} : {mood: 'happy'})
	}
}

export default SimpleComponent