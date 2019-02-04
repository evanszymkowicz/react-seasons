import React from 'react';
import './SeasonDisplay.css';
/*if the month is "greater" than 2 and less than 9
	will tell the program if it is winter or summer where we are*/
/*Then use a JS ternary expression of 'is lat greater than 0? Yes: Northern'*/
const seasonConfig = {
	summer: {
		text: "Time to get to the beach",
		icon: 'sun'
	},
	winter: {
		text: "Bundle up, it is cold out",
		iconName: 'snowflake'
	}
};

const getSeason = (lat, month) => {
	if (month > 2 && month < 9) {
		return lat > 0 ? 'summer' : 'winter';
	} else {
		return lat > 0 ? 'winter' : 'summer';
	}
};

const SeasonDisplay = props => {
	const season = getSeason(props.lat, new Date().getMonth());
	const {text, iconName } = seasonConfig[season]; // {text, icon}

	return (
		<div className={`season-display ${season}`}>
			<i className={`icon-left huge ${iconName} icon`} />
			<h1>{text}</h1>
			<i className={`icon-right huge ${iconName} icon`} />
		</div>
	);
};

export default SeasonDisplay;
