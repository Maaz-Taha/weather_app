



let getWeather = () => {

    let cityName = document.querySelector("#cityName").value;


    axios.get(`https://api.openweathermap.org/data/2.5/weather?units=metric&appid=40cdf5ccc0405849e5d2afc9f98138fa&q=${cityName}`)
        .then(function (response) {
            // handle success
            console.log(response.data);
            document.querySelector("#dt").innerHTML = `${moment(response.data.dt * 1000).format('MMMM Do YYYY, h:mm a')}`

            document.querySelector("#city").innerHTML = `${response.data.name}, ${response.data.sys.country}`
            document.querySelector("#temp").innerHTML = `${response.data.main.temp}°C`
            document.querySelector("#mm").innerHTML = `min ${response.data.main.temp_min}°C | max ${response.data.main.temp_max}°C`
            document.querySelector("#feelsLike").innerHTML = `${response.data.main.feels_like}°C`
            document.querySelector("#humidity").innerHTML = `${response.data.main.humidity}`
            document.querySelector("#pressure").innerHTML = `${response.data.main.pressure}`
            document.querySelector("#weather").innerHTML = `${response.data.weather[0].description}`
            document.querySelector("#icon").src = `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`


            // background images

            if (response.data.weather[0].description == ("clear sky")) {
                document.body.style = `background-image: url(bgimg/slearsky.jpg)`
            }

            else if (response.data.weather[0].description == ("few clouds")) {
                document.body.style = `background-image: url(bgimg/fewclouds.jpg)`
            }

            else if (response.data.weather[0].description == ("scattered clouds")) {
                document.body.style = `background-image: url(bgimg/scatteredclouds.jpg)`
            }

            else if (response.data.weather[0].description == "broken clouds") {
                document.body.style = `background-image: url(bgimg/brokenclouds.jpg)`
            }

            else if (response.data.weather[0].description == ("shower rain")) {
                document.body.style = `background-image: url(bgimg/showerrain.avif)`
            }

            else if (response.data.weather[0].description == ("rain")) {
                document.body.style = `background-image: url(bgimg/rain.jpg)`
            }

            else if (response.data.weather[0].description == ("thunderstorm")) {
                document.body.style = `background-image: url(bgimg/thunderstorm.avif)`
            }

            else if (response.data.weather[0].description == ("snow")) {
                document.body.style = `background-image: url(bgimg/snow.avif)`
            }

            else if (response.data.weather[0].description == ("mist")) {
                document.body.style = `background-image: url(bgimg/mist.avif)`
            }


        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
}


