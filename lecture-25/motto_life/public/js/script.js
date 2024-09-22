import displayQuote from "./displayQuotes.js"; // Import the displayQuote function

const API_URL = "https://dummyjson.com/quotes/random"; // Define the URL for the API

// Input: None (User action through click event triggers fetch)
// Process: 
// - call fetchQuote function when button is click
// - fetch data from API (URL: https://dummyjson.com/quotes/random)
// - convert the response to JSON
// - pass the data to displayQuote function for render
// Output: render quote and author displayed on the webpage
const fetchQuote = async () => { // 3. Define fetchQuote as an async function
    try {
        // step 1: Call the API and waiting for a response
        const resp = await fetch(API_URL); // Fetch data from the defined API URL
        // step 2: Convert the response to JSON format
        const data = await resp.json(); //Convert the API response to a JSON object
        // step 3: Call the displayQuote function to render the data on the page
        displayQuote(data); // pass the data fetched from the API to the displayQuote function
    } catch (error) {
        // step 4: Catch and handle any errors
        console.error('Error fetching data:', error); //Log an error message if fetching fails
    }
};

// step 5: Add an event to button, trigger fetchQuote when click
document.getElementById("fetch-quote").addEventListener("click", fetchQuote);
