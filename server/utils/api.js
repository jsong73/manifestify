const fetch = require("node-fetch-commonjs");

async function fetchFortuneCookie() {
  try {
    const response = await fetch(
      "https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en"
    );

    if (!response.ok) {
      throw new Error("API request failed with status: " + response.status);
    }

    const data = await response.json();
    
    if (!data.quoteText) {
      throw new Error("Invalid API response: Missing quoteText");
    }

    return data.quoteText;
  } catch (error) {
    console.error("Error:", error.message);
    throw error;
  }
}

module.exports = { fetchFortuneCookie };




