import { WiThermometer } from "weather-icons-react";
import Highlights from "./Highlights";
const WeeklyCards = ({ weather }) => {
    // console.log(weather)
    // time.temp.day
    // const timeConvert = weather.daily?.map((time) => time.dt);
    // const dayPartTimeConvert = timeConvert?.map((el, index) => (
    //     <div key={index}>
    //         {new Date(el * 1000).toLocaleString("en-us", { weekday: "long" })}
    //     </div>
    // ));

    const dailyWeatherIcon = weather.daily?.map((el) =>
        el?.weather?.map((ico) => (
            <div className="little_cards">
                <span style={{ textAlign: "center" }}>
                    {new Date(el.dt * 1000).toLocaleString("en-us", { weekday: "long" })}
                    <div style={{ opacity: 0.6 }}>
                        {" "}
                        {new Date(el.dt * 1000).toLocaleString("en-us", {
                            day: "numeric",
                            month: "numeric",
                        })}
                    </div>
                </span>
                <img
                    className="imgr"
                    key={ico.id}
                    src={`http://openweathermap.org/img/wn/${ico.icon}@2x.png`}
                ></img>
                <span style={{ marginBottom: "5px" }}>{ico.main}</span>
                <span style={{ textAlign: "center", display: "flex" }}><WiThermometer size={25} color="#fff" />{el.temp.day} °C</span>
            </div>
        ))
    );

    return (
        <div className="week_container">
            <span className="weekly_title"> Weekly </span>
            {/* {weather.daily.map(day => console.log(day))} */}
            <div className="little_cards_container">{dailyWeatherIcon}</div>
            <Highlights weather={weather} />

        </div>
    );
};

export default WeeklyCards;
