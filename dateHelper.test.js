const { convertToDateFormat, addYear, subtractYear } = require('./dateHelper.js');

describe('Convert to Date Format Logic', () => {
	test(`STRING 'Jun 27 2019' returns NUMBER 20190627`, () => {
		expect(convertToDateFormat('Jun 27 2019')).toBe(20190627);
	});
	test(`STRING '2019-06-27' returns NUMBER 20190727`, () => {
		expect(convertToDateFormat('2019-06-27')).toBe(20190627);
	});
	test(`STRING '20190627' returns NUMBER 2019-07-27`, () => {
		expect(convertToDateFormat('20190627')).toBe(20190627);
	});
});

describe('We can now reliably and easily test mathematical functions based on a standardized, singualr format', () => {
	test('Add a year', () => {
		expect(addYear(20190627)).toBe(20200627);
	});
	test('Subtract a year', () => {
		expect(subtractYear(20190627)).toBe(20180627);
	});
});
