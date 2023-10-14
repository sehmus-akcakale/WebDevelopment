const apiKey = "API KEY";
const searchButton = document.querySelector(".textButton");
const locationButton = document.querySelector(".locationButton");
const locationInformation = document.querySelector("#locationInformation");
const insertionElement = document.querySelector(".countyInformation");
const weatherConditionsPictures = {
  Rain: "weatherConditionsPictures/cloudy.png",
  Snow: "weatherConditionsPictures/snow.png",
  Clouds: "weatherConditionsPictures/cloudy.png",
  Clear: "weatherConditionsPictures/sunny.png",
};
var country;
var baseURL;

searchButton.addEventListener("click", () => {
  if (locationInformation.value == "") {
    alert("Input text is empty");
  } else {
    country = locationInformation.value;
    baseURL = `https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=${apiKey}`;
    fetchData();
  }
});

locationButton.addEventListener("click", () => {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(function (position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      baseURL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;
      fetchData();
    });
  } else {
    alert("Geolocation is not supported in this browser.");
  }
});

async function fetchData() {
  try {
    const response = await fetch(baseURL);
    if (response.ok) {
      const data = await response.json();
      AddInformation(data);
    } else {
      throw new Error("Location information should be given correctly");
    }
  } catch (error) {
    alert(error);
  }
}

function AddInformation(data) {
  var information = `
  <div class = "information">
    <img src = ${weatherConditionsPictures[data.weather[0].main]}>
    <h2 id = "degree"> <span>${KelvinToCelcius(
      data.main.temp
    )}</span><b><span id = "celcius">&#8451;</span></b></h2>
    <h3 id = "weatherInformation"> ${data.weather[0].main}</h3>
    <h3 id = "location"> ${data.name.toUpperCase()}</h3>
  </div>
  `;
  insertionElement.innerHTML = information;
}

//API provides Kelvin so to change it Celcius
function KelvinToCelcius(degree) {
  return (degree - 273.15).toFixed(1);
}

// (Weather Types) -- Rain , Snow , Clouds , Clear ,
