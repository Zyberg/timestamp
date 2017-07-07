const moment = require('moment');


/*
	Returns a newly created object from INPUT string
	{
		'unix': UNIX,
		'natural': NATURAL
	}

	INPUT is either UNIX or NATURAL,
	UNIX - unix timestamp.
	NATURAL - natural date timestamp.
*/
exports.timestampObject = (input) => {
	// create the timestamp object with default values
	var result = {"unix": null, "natural": null};

	// check if 'input' is a number and then check for the date accordingly
	if(isNaN(input)){
		// a dummy date for testing
		var date_natural = moment(input);

		// check whether the date is valid and populate result's object
		if(date_natural.isValid()){
			result.unix = String(date_natural.unix());
			result.natural = date_natural.format("MMMM Do, YYYY");
		}
	} else {
		// a dummy date for testing
		var date_unix = moment.unix(Number(input));

		// check whether the date is valid and populate result's object
		if (date_unix.isValid()) {
			result.unix = input;
			result.natural = date_unix.format("MMMM Do, YYYY");
		}
	}

	return result;
}