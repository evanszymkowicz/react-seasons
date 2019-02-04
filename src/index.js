import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

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
		console.log('The component was updated. It has rerendered');
	}

	renderContent() {
		if (this.state.errorMessage && !this.state.lat) {
			return <div>Error: {this.state.errorMessage}</div>;
		}

		if (!this.state.errorMessage && this.state.lat) {
			return <SeasonDisplay lat={this.state.lat} />
		}

		return <Spinner message="Please enable location services in your browser" />;
	}

	render() {
		return (
			<div className="border red">
				{this.renderContent()}
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector('#root'));
