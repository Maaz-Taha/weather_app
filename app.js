










let getWeather = () => {

    let cityName = document.querySelector("#cityName").value;


    axios.get(`https://api.openweathermap.org/data/2.5/weather?units=metric&appid=40cdf5ccc0405849e5d2afc9f98138fa&q=${cityName}`)
        .then(function (response) {
            // handle success
            console.log(response.data);
            document.querySelector("#dt").innerHTML =   `${new Date()}`
            document.querySelector("#city").innerHTML = `${response.data.name}, ${response.data.sys.country}`
            document.querySelector("#temp").innerHTML = `${response.data.main.temp}°C`
            document.querySelector("#mm").innerHTML = `min ${response.data.main.temp_min}°C | max ${response.data.main.temp_max}°C`
            document.querySelector("#feelsLike").innerHTML = `${response.data.main.feels_like}°C`
            document.querySelector("#humidity").innerHTML = `${response.data.main.humidity}`
            document.querySelector("#pressure").innerHTML = `${response.data.main.pressure}`
            document.querySelector("#weather").innerHTML = `${response.data.weather[0].description}`
            document.querySelector("#icon").src = `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
            // document.querySelector("#icon").src = "http://openweathermap.org/img/wn/10d@2x.png"
            // document.querySelector("#icon").innerHTML = ${response.data.weather[0].icon}

        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
}


