# projectAPI-nasa
A small project using a NASA API, which shows the picture of the day! ˗ˏˋ ★ˎˊ˗
Below are the steps you can take to include this project in your portfolio!


*Explaining the Java Script part:*


const apiKey = 'YOUR API KEY';

async function fetchAPOD() {
  // Make a request to the NASA APOD API using the provided API key
  const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`);
  
  // Convert the response to JSON format
  const data = await response.json();
  
  // Get the HTML element with the ID "apod-image"
  const apodImage = document.getElementById('apod-image');
  
  // Get the HTML element with the ID "apod-title"
  const apodTitle = document.getElementById('apod-title');
  
  // Get the HTML element with the ID "apod-explanation"
  const apodExplanation = document.getElementById('apod-explanation');
  
  // Get the HTML element with the ID "loadButton"
  const loadButton = document.getElementById('loadButton');
  
  // Get the HTML element with the ID "apodContainer"
  const apodContainer = document.getElementById('apodContainer');
  
  // Hide the "Load" button
  loadButton.style.display = 'none';
  
  // Display the container that holds the APOD content
  apodContainer.style.display = 'block';

  // Set the "src" attribute of the image to the URL from the API response
  apodImage.src = data.url;
  
  // Set the text content of the "apodTitle" element to the title from the API response
  apodTitle.textContent = data.title;
  
  // Set the text content of the "apodExplanation" element to the explanation from the API response
  apodExplanation.textContent = data.explanation;
}
