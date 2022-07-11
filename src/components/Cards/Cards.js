import { WiThermometer, WiStrongWind } from "weather-icons-react";
const Cards = ({ weather, cityName}) => {
  const dateObj = { weekday: "long" };

  const hour = new Date().getHours();
  const minute = new Date().getDate();

  console.log(weather);
  return (
    <div className="card_container">
      <div className="today_card">
        <h2 className="city_name"> {cityName} </h2>
        <h3>Today</h3>
        <div className="day_clock">
          {
            <div className="dayOfWeek">
              {" "}
              {new Date().toLocaleDateString("en-EN", dateObj)}{" "}
            </div>
          }
          <div className="clock">
            {hour}:{minute}
          </div>
        </div>
        <span className="temp">
          {Math.floor(weather.current?.temp)}
          <span className="celc">°C</span>
        </span>

        {weather.current?.weather.map((el) => (
          <img src={`http://openweathermap.org/img/wn/${el.icon}@2x.png`}></img>
        ))}
        <span className="feels_like">
          <WiThermometer size={25} color="#fff" />
          Feels like {Math.ceil(weather.current?.feels_like)}
          <span className="feels_celc">°C</span>
        </span>
        <span className="wind_speed">
          <WiStrongWind size={25} color="#fff" />
          Wind speed {weather.current?.wind_speed}m/s
        </span>
        {weather.current?.weather.map((el, index) => (
          <div key={index} className="main">
            {el.main}
          </div>
        ))}
        {weather.current?.weather.map((el, index) => (
          <div key={index} className="description">
            {el.description.charAt(0).toUpperCase() + el.description.slice(1)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
