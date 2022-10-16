










let getWeather = () => {
    
    let cityName = document.querySelector("#cityName").value;


    axios.get(`https://api.openweathermap.org/data/2.5/weather?units=metric&appid=40cdf5ccc0405849e5d2afc9f98138fa&q=${cityName}`)
        .then(function (response) {
            // handle success
            console.log(response.data);
        document.querySelector("#city").innerHTML=`${response.data.name}, ${response.data.sys.country}`
            document.querySelector("#temp").innerHTML=`${response.data.main.temp}°C`
            document.querySelector("#mm").innerHTML = `min ${response.data.main.temp_min}°C | max ${response.data.main.temp_max}°C`
            document.querySelector("#feelsLike").innerHTML= `${response.data.main.feels_like}°C`
            document.querySelector("#humidity").innerHTML= `${response.data.main.humidity}`
            document.querySelector("#pressure").innerHTML= `${response.data.main.pressure}`
            document.querySelector("#weather").innerHTML= `${response.data.weather.description}`


        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
}



addEventListener('submit',function(e){
    document.querySelector(".row").stlye.visiblity = "visible" 
})