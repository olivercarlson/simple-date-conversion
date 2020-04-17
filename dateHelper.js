/*
   Date Helper is a pure function to provide a clean and simple output API for other functions to interact with. 

    Expected to handle three different types of input based off of where the data is sourced.

    #1: Input: NUMBER YYYYMMDD 
    #2: Input: STRING 'Dec 12 2018' || String 'DEC 12 2018'
    #3: Input: STRING '2018-01-01'
    
    Output: NUMBER YYYYMMDD

*/

const convertToDateFormat = (date) => {
	let result;

	// Input is in the correct format. No changes.
	if (typeof date === typeof Number()) {
		result = date;
	}

	// handle US Date format ('Dec 12 2018')
	if (typeof date === typeof String() && date.length === 11) {
		let dateString = date.toString().toLowerCase();

		const convertDate = {
			jan: '01',
			feb: '02',
			mar: '03',
			apr: '04',
			may: '05',
			jun: '06',
			jul: '07',
			aug: '08',
			sep: '09',
			oct: '10',
			nov: '11',
			dec: '12',
		};

		let year = dateString.substr(7);
		let day = dateString.substr(4, 2);
		let month = convertDate[dateString.substr(0, 3)];

		result = year + month + day;
	} else if (typeof date === typeof String()) {
		// return a date stripped of white spaces and dashes.
		// e.g 2018-01-01 would return 20180101
		result = date.replace(/[^\w\s]/gi, '');
	}

	return Number(result);
};

// Sample Functions to use the format to handle the date generated from above:
const addYear = (date) => {
	return date + 10000;
};

const subtractYear = (date) => {
	return date - 10000;
};

exports.convertToDateFormat = convertToDateFormat;
exports.addYear = addYear;
exports.subtractYear = subtractYear;
