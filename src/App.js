import Navbar from "./Navbar";
import ListCreator from "./components/ListCreator/ListCreator";
// import Loading from "./Loader/Loading";
import { useEffect, useState } from "react";
import { Link, Route, Routes, NavLink } from "react-router-dom";

import "./App.css";
function App() {
  // const [data, setData] = useState(fetchData); // city json
  // const [api, setApi] = useState({}); // weather api
  // const [load, setLoad] = useState(true);

  // const cityFinder = (e) => {
  //   const point = e.target.value;
  //   return fetchData.find((city) => {
  //     if (point === city.id) {
  //       const { latitude, longitude } = city;
  //       fetchAPI(latitude, longitude);
  //     }
  //   });
  // };

  // const fetchAPI = async (lat, lon) => {
  //   await fetch(
  //     `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=dc0af9ea20aaabbb39926a631667503d&units=metric`
  //   )
  //     .then((response) => response.json())
  //     .then((datas) => setApi(datas));
  // };

  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoad(false);
  //   }, 2000);
  // }, []);

  return (
    <div className="App">
      <Navbar />
     

      <ListCreator />
    </div>
  );
}

export default App;
