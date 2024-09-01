const apiKey = "qJsdEhgxPj4vcnCGHb0kjndBit1Ku2RTehYfNRBH";

async function fetchAPOD() {
  const response = await fetch(
    `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`
  );
  const data = await response.json();

  const apodImage = document.getElementById("apod-image");
  const apodTitle = document.getElementById("apod-title");
  const apodExplanation = document.getElementById("apod-explanation");
  const loadButton = document.getElementById("loadButton");
  const apodContainer = document.getElementById("apodContainer");
  loadButton.style.display = "none";
  apodContainer.style.display = "block";

  apodImage.src = data.url;
  apodTitle.textContent = data.title;
  apodExplanation.textContent = data.explanation;
}
