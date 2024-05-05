import React, {useState} from 'react';
import '../WeatherApp/WeatherApp.css';
import search_icon from '../../Assets/search.png';
import clear_icon from '../../Assets/clear.png';
import cloud_icon from '../../Assets/cloud.png';
import drizzle_icon from '../../Assets/drizzle.png';
import rain_icon from '../../Assets/rain.png';
import snow_icon from '../../Assets/snow.png';
import wind_icon from '../../Assets/wind.png';
import humidity_icon from '../../Assets/humidity.png';


const WeatherApp = () => {

  let api_key = '35b41b87bb81c85bd095b41f6d9d3c16';

  const [wicon,setWicon] = useState (cloud_icon);
  
  {/*Arrow Function to fetch data from API*/}
  const search = async () => {
    const element = document.getElementsByClassName("cityInput")
    if(element[0].value=== "")
    {
      return 0;
    }
    {/*variables to store data*/}
    let url= `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Imperial&appid=${api_key}`;
    let response = await fetch(url);
    let data = await response.json();
  

    {/* Allows us to easily update data on App*/}
    const humidity = document.getElementsByClassName("humidity-metrics");
    const wind = document.getElementsByClassName("wind-metrics");
    const temperature = document.getElementsByClassName("weather-temp");
    const location = document.getElementsByClassName("weather-location");

    humidity[0].innerHTML = data.main.humidity+ "%";
    wind[0].innerHTML = Math.floor(data.wind.speed)+ " km/h";
    temperature[0].innerHTML = Math.floor(data.main.temp)+"°F";
    location[0].innerHTML = data.name;


{/* Interactive Icon Display from OpenWeatherApp.com*/}
  if (data.weather[0].icon==="01d" || data.weather[0].icon==="01n" )
{
  setWicon(clear_icon);
}
else if (data.weather[0].icon==="02d" || data.weather[0].icon==="02n" )
{
  setWicon(cloud_icon);
}
else if (data.weather[0].icon==="03d" || data.weather[0].icon==="03n" )
{
  setWicon(drizzle_icon);
}
else if (data.weather[0].icon==="04d" || data.weather[0].icon==="04n" )
{
  setWicon(drizzle_icon);
}
else if (data.weather[0].icon==="09d" || data.weather[0].icon==="09n" )
{
  setWicon(rain_icon);
}
else if (data.weather[0].icon==="10d" || data.weather[0].icon==="10n" )
{
  setWicon(rain_icon);
}
else if (data.weather[0].icon==="13d" || data.weather[0].icon==="13n" )
{
  setWicon(snow_icon);
}
else{
  setWicon(clear_icon);
} }

  return (
    <div className='container'>

      {/*Search Bar */}
      <div className="search-bar">
        <input type="text" className="cityInput" placeholder='Search'/>
        <div className="search-icon" onClick={()=>{search()}}>
          <img src={search_icon}></img>
        </div>
      </div>

      {/*Weather Image and Temp */}
      <div className="weather-image">
        <img src={wicon} />
      </div>
      <div className="weather-temp">55°F</div>
      <div className="weather-location">New York</div>

      {/*Humidity Data */}
      <div className="data-container">
        <div className="elements">
          <img src={humidity_icon} alt="" className="icon" />

          <div className="data">
            <div className="humidity-metrics">64%</div>
            <div className="text">Humidity</div>
          </div>
        </div>
        {/*Wind Speed Data */}
        <div className="elements">
          <img src={wind_icon} alt="" className="icon" />
          <div className="data">
            <div className="wind-metrics">18 km/hr</div>
            <div className="text">Wind Speed</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WeatherApp