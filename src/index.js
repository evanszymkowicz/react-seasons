import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

//define the constructor method using props as a standard
//extends functionality from the .Component base class
//only time using direct assignment to this.setState
class App extends React.Component {
	state = { lat: null, errorMessage: '' };

	//must always call .setState
	//updated object {} contains the new state
	componentDidMount() {
		window.navigator.geolocation.getCurrentPosition(
			position => this.setState({ lat:position.coords.lattitude }),
			//kicks this out if location cannot be tracked
			err => this.setState({ errorMessage: err.message })
		);
	}

	componentDidUpdate() {
		console.log('My component was updated. It has rerendered');
	}

	//conditional rendering
	render() {
			if (this.state.errorMessage && !this.state.lat) {
				return <div>Error: {this.state.errorMessage}</div>;
			}

			if (!this.state.errorMessage && this.state.lat) {
				return <SeasonDisplay lat={this.state.lat} />
			}

			return <div>Loading!</div>;
	}
}

ReactDOM.render(<App />, document.querySelector('#root'));
