// Step 1: Create a list of 5 countries
const countries = ["Kenya", "Nigeria", "Brazil", "Japan", "Germany"];

// Step 2: Use .slice() to get a portion of the list (e.g., first 3 countries)
const slicedCountries = countries.slice(0, 3);
console.log("Sliced Countries:", slicedCountries);

// Step 3: Use .filter() to get countries with names longer than 5 characters
const longNamedCountries = countries.filter(country => country.length > 5);
console.log("Countries with names longer than 5 characters:", longNamedCountries);
