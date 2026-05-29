const searchBtn = document.getElementById("search-btn");
const cityInput = document.getElementById("city-input");

searchBtn.addEventListener("click", function () {
  const cityName = cityInput.value;

   if (cityName.trim() === "") {
    alert("Please enter city name");
    return; // <-- Yeh 'return' code ko aage fetch par jaane se yahin rok dega
  }
  console.log("Button click hua hai, city hai: " + cityName);

 

  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      cityName +
      "&appid=enterApiKey",
  )
    .then(response => {
    // Agar response sahi nahi aaya (ok nahi hai)
    if (!response.ok) {
        alert("City not found");
        throw new Error("City not found"); // <-- Yeh code ko yahin rok deta hai
    }
    return response.json(); // Agar sab sahi hai, tabhi dabba kholo
})
    .then((data) => {
      console.log("Real Data Aa Gaya: ", data);
      document.getElementById("city-name").innerText = data.name;
      document.getElementById("temperature").innerText = Math.round(data.main.temp - 273.15) + "°C";
      document.getElementById("description").innerText = data.weather[0].description;
    });
});
