import Cards from "../Cards/Cards";
const City = ({ weather, cityName }) => {
 // ° C

  return (
    <div className="city_weather_container">
      <div className="weather_cards">
        <Cards weather={weather} cityName={cityName} />
      </div>
      {/* {weather.daily?.map(city => {
        const {temp } = city
        console.log(temp)
       })} */}
    </div>
  );
};

export default City;
