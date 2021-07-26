let card = document.querySelector(".card")
let invalid = document.querySelector(".invalid")

let getWeatherData = async () => {
    try {
        // Getting the input text
        let searchInput = document.querySelector(".search-input").value.trim()
        // Getting the response from the api
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchInput}&units=metric&appid=222135a57ea9c3923e76a61c0a8a2f2b`)
        // Converting the response into json
        let data = await response.json()
        // Getting the icon's url
        let icon = `http://api.openweathermap.org/img/w/${data.weather[0].icon}.png`
        // Selecting the icon class and adding the src attribute
        let iconImg = document.querySelector(".icon")
        iconImg.setAttribute("src", icon)
        // Selecting the cityandcountry class and displaying the city and country name
        let cityAndCountry = document.querySelector(".cityandcountry")
        cityAndCountry.innerHTML = `${data.name}, ${data.sys.country}`
        // Selecting the weather-type class and displaying the weather type
        let weatherType = document.querySelector(".weather-type")
        weatherType.innerHTML = `<strong>Weather Type: </strong>${data.weather[0].main}`
        // Selecting the description class and displaying the description
        let description = document.querySelector(".description")
        description.innerHTML = `<strong>Description: </strong>${data.weather[0].description}`
        // Selecting the temp class and displaying the temparature
        let temp = document.querySelector(".temp")
        temp.innerHTML = `<strong>Temparature: </strong>${data.main.temp}°C`
        // Selecting the humidity class and displaying the humidity
        let humidity = document.querySelector(".humidity")
        humidity.innerHTML = `<strong>Humidity: </strong>${data.main.humidity}`
    } catch (error) {
        invalid.innerText = "Please enter a valid city name..."
        setTimeout(() => {
            invalid.remove();
        }, 3000);
    }
}

// Getting the button and adding an event listener
let searchBtn = document.querySelector(".search-btn")
searchBtn.addEventListener("click", getWeatherData)
