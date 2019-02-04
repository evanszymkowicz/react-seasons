import React from 'react';
/*if the month is "greater" than 2 and less than 9
	will tell the program if it is winter or summer where we are*/
/*Then use a JS ternary expression of 'is lat greater than 0? Yes: Northern'*/
const getSeason = (lat, month) => {
	if (month > 2 && month < 9) {
		lat > 0 ? 'summer' : 'winter';
	} else {
		return lat > 0 ? 'winter' : 'summer';
	}
};

const SeasonDisplay = (props) => {
	const season = getSeason(props.lat, new Date().getMonth());
	return (
		<div>
		{season === 'winter' ? 'Bundle up, it is cold out!' : 'Grab the shorts!'}
		</div>
	);
};

export default SeasonDisplay;
