import { useState, useRef} from "react";
import fetchData from "./data.json";
import City from "../City/City";

function ListCreator() {
  const [weather, setWeather] = useState([]); // weather information
  const [cityName, setCityName] = useState(); // city names

  const weatherContent = useRef();

  function showWeatherContent() {
    weatherContent.current.scrollIntoView();
  }

  const cityFinder = (e) => {
    const point = e.target.value;
    return fetchData.find((city) => {
      if (point === city.id) {
        const { latitude, longitude } = city;
        fetchAPI(latitude, longitude) && fetchName(latitude, longitude);
      }
    });
  };

  const fetchName = async (lat, lon) => {
    await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid={API_KEY}d&units=metric`
    )
      .then((response) => response.json())
      .then((datas) => setCityName(datas.name));
  };

  const fetchAPI = async (lat, lon) => {
    await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly&appid={API_KEY}d&units=metric`
    )
      .then((response) => response.json())
      .then((datas) => setWeather(datas));
  };

  return (
    <>
      <ul className="city_container">
        {fetchData.map((city) => (
          <li
            key={city.id}
            value={city.id}
            onClick={(e) => {
              cityFinder(e);
              showWeatherContent();
            }}
          >
            <span className="plate_number">{city.id}</span>
            {city.name}
          </li>
        ))}
        <div ref={weatherContent} className="weather">
          {" "}
        </div>
      </ul>

      <City weather={weather} cityName={cityName}/>
    </>
  );
}

export default ListCreator;
