/*
=======================================
📘 JavaScript & Web APIs Lab
All tasks in one file (script.js)
=======================================
*/

/*  
=======================================
TODO1: Welcome Board
---------------------------------------
When the page loads, display a welcome message 
inside the <p> element with id="t1-msg".

✅ Task:
- Select the element with id "t1-msg".
- Change its text to "Hello, World!".

💡 Hint:
document.getElementById("t1-msg").innerHTML = "Hello, World!";
*/

document.getElementById("t1-msg").innerHTML = "Hello, World!";
 

/*  
=======================================
TODO2: Interaction Corner
---------------------------------------
There is a button with id="t2-btn".
When the button is clicked, change the text inside 
the <p> with id="t2-status" to:
    "You clicked the button!"

✅ Task:
- Get the button element.
- Add a click event listener.
- Inside the event, change the text of the status paragraph.

💡 Hint:
button.addEventListener("click", function () {
    // change text here
});
*/

const button = document.getElementById("t2-btn");
const statusPar = document.getElementById("t2-status");

button.addEventListener("click", function () {
    statusPar.textContent = "You clicked the button!";
});
 

/*  
=======================================
TODO3: Inspiring Quote Board
---------------------------------------
Use the Quotable API to display a random quote.

🌍 API Link:
https://dummyjson.com/quotes/random

✅ Task:
- When the button with id="t3-loadQuote" is clicked:
    - Fetch a random quote from the API.
    - Display the quote text inside the <p> with id="t3-quote".
    - Display the author inside the <p> with id="t3-author".

💡 Hint:
The API returns JSON like:
{
  "content": "Do not watch the clock. Do what it does. Keep going.",
  "author": "Sam Levenson"
}

Use:
data.content   // the quote text
data.author    // the author
*/
 
const loadQuoteButton = document.getElementById("t3-loadQuote");
const quoteParagraph = document.getElementById("t3-quote");
const authorParagraph = document.getElementById("t3-author");

loadQuoteButton.addEventListener("click", function () {
    fetch("https://dummyjson.com/quotes/random")
        .then(response => response.json())
        .then(data => {
            quoteParagraph.textContent = data.quote;
            authorParagraph.textContent = data.author;
        });
});

/*  
=======================================
TODO4: Dammam Weather Now
---------------------------------------
Use the OpenWeatherMap API to display live weather data.

🌍 API Link:
https://api.openweathermap.org/data/2.5/weather?q=Dammam&appid=API_KEY=metric

⚠️ Replace YOUR_API_KEY with your actual API key from:
https://openweathermap.org/api

✅ Task:
- When the button with id="t4-loadWx" is clicked:
    - Fetch current weather data for Dammam.
    - Show temperature in the element with id="t4-temp".
    - Show humidity in the element with id="t4-hum".
    - Show wind speed in the element with id="t4-wind".

💡 Hint:
data.main.temp      → temperature (°C)
data.main.humidity  → humidity (%)
data.wind.speed     → wind speed (m/s)
*/

const weatherButton = document.getElementById("t4-loadWx");
const tempElement = document.getElementById("t4-temp");
const humidityElement = document.getElementById("t4-hum");
const windElement = document.getElementById("t4-wind");

weatherButton.addEventListener("click", function () {
    const apiKey = "d56adb99919e7f9e7fdea5eb07c9be13"; 
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Dammam&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            tempElement.textContent = `${data.main.temp} °C`;
            humidityElement.textContent = `${data.main.humidity} %`;
            windElement.textContent = `${data.wind.speed} m/s`;
        });
});

