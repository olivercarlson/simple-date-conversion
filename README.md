A Simple Date Conversion tool inspired by work built by some of the development done while working for SunPower.

# Overview

The web app contains a significant amount of data to display about the customers solar power bills and their related solar
"birthdays" (date they got solar), their storage "birthday" (date they got a solar storage system - if applicable), and an up to 12 month 
lookback based of their electricity bills throughout the year.   

The UI state would need to change for each customer based on a per month basis showing any changes in their solar and storage 
system (e.g "You got solar this month!") in addition to other calculations.    

# Requirements:

This code snippet demonstrates the following key principles:

1. Easy to use:
A simple and reliable I/O model - input the dates from the bills and know exactly what the output is.
            
2. Easy to reason about:
Pure functions. No state mutations, no side effects. Debugging logic based off of this is far easier because you can build the logic in smaller, bite-sized chunks.  

2. Testable:
No stubs or mocking are necessary nor are any complex argument passing / stateful method calls. Requirements for the current code can be easily documented with tests.

# Considerations:

These two options represent two of the main considerations chosen when deciding on writing the code in this repository.
Overall, both of these alternatives ended up providing solutions akin to the classic gorilla and the banana scenario 
where you what you wanted was the banana but instead you got the gorilla and the entire jungle.

## Use JavaScript's built in Date Object:
Two main drawbacks from the Date.Object.

1. It is far too easy to accidentally write mutative code using the Date object. 
2. Overall, added more complexity than it removed by automatically formatting dates with time zones.

## Alternatively, use Moment.js or similar library to handle date conversion:
Drawbacks of third party library solution:

1. As with (1) above, it is again quite easy to mutate Moment date objects though clearer and easier to avoid here.
2. Adds an another non-native API to learn.
3. Includes a lot of unnecessary code for what are other pretty simple date manipulations. (edge cases such as leap years, or multiple tariff shifts within a short time frame, were relatively straightforward to solve in the production version).

# Results:
The resulting code provides a consistent and reliable output format on every possible production input.
For example, convertToDateFormat (x) where x = STRING 'jan 01 2018' || String 'JAN 01 2018' || STRING '2018-01-01' || NUMBER 20180101 all return the same output 20180101

If you accidentally call it on a date already in the correct format, it simply returns the original input.

Additionally, the codes output provides a singular input for other functions to build from such as the simple 
"add a year" function to the more complex such as comparing multiple past and future date pairs with the current year bill range.

As a secondary benefit to the choice, the format does allow for easy comparison because the numerical value is always greater on a newer date e.g to display graphics and UI such as "You got solar this year good job!" (below example assumes that they are already converted to the date format and stored that way) 

###solar birthdate < date one year ago ? return <div>"You got solar this year, good job!"</div> : return <div>"You've had solar for more than a year. Keep up the good work!"</div>   ###
