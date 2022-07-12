import { WiHumidity,WiNightAltCloudyHigh,WiSunrise,WiStrongWind,WiStormWarning,WiSandstorm } from "weather-icons-react";


const Highlights = ({ weather }) => {

    const todayHighlights = weather.current

    console.log(weather.current)
    return (
        <div className="highlights">
            <div className="highlights_title"> Today's Highlights </div>
<div className="humidity_clouds_uvi">
   <div className="humidity"><WiHumidity size={35} color="#fff" /> Humidity : {weather.current?.humidity} </div>
   <div className="clouds"><WiNightAltCloudyHigh size={35} color="#fff" /> Clouds : {weather?.current?.clouds} </div>
   <div className="uvi"><WiSunrise size={35} color="#fff"/> UVI : {weather.current?.uvi} </div>
</div>
<div className="wind_details">
<div className="humidity"><WiStrongWind size={35} color="#fff" /> Wind Speed : {weather.current?.wind_speed} m/s</div>
   <div className="clouds"><WiStormWarning size={35} color="#fff" /> Wind Degree : {weather?.current?.wind_deg} deg.</div>
   <div className="uvi"><WiSandstorm size={35} color="#fff"/> Wind Gust : {weather.current?.wind_gust}m/s </div>
</div>
        </div>
    )
}

export default Highlights;