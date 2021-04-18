import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./API.css";
import { quotes } from "./quotes";

function API() {
  const [location, setLocation] = useState({
    loaded: false,
    coordinates: { lat: "", lng: "" },
  });

  const [temp, setTemp] = useState("");
  const [temp_min, setTemp_min] = useState("");
  const [temp_max, setTemp_max] = useState("");
  const [wind_deg, setWind_deg] = useState("");
  const [wind_speed, setWind_speed] = useState("");
  const [weather, setWeather] = useState("");
  const [name, setName] = useState("");
  const [country, setcountry] = useState("");
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  const api_key = "b41cca6b4f5592308fa8b579b37903ac";
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    "Kurukshetra" +
    "&appid=" +
    api_key;
  //let geo = navigator.geolocation;
  //const city = "Manchester"
  //const url_weather = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + api_key;

  // const onSuccess = (location) => {
  //         setLocation({
  //             loaded: true,
  //             coordinates: {
  //                 lat: location.coords.latitude,
  //                 lng: location.coords.longitude,
  //             },
  //         });
  //     };

  //     const onError = (error) => {
  //         setLocation({
  //             loaded: true,
  //             error: {
  //                 code: error.code,
  //                 message: error.message,
  //             },
  //         });
  //     };

  useEffect(() => {
    //         if (!("geolocation" in navigator)) {
    //                 onError({
    //                     code: 0,
    //                     message: "Geolocation not supported",
    //                 });
    //             }

    //         navigator.geolocation.getCurrentPosition(onSuccess, onError);

    //       console.log(location)

    //     const url =
    //       "api.openweathermap.org/data/2.5/weather?lat=" +
    //       { lat } +
    //       "&lon=" +
    //       { lng } +
    //       "&appid=" +
    //api_key;
    Axios.get(url).then((res) => {
      console.log(res.data);
      setTemp(Math.round(res.data.main.temp - 273.15) + "°C");
      setTemp_min(Math.round(res.data.main.temp_min - 273.15) + "°C");
      setName(res.data.name);
      setcountry(res.data.sys.country);
      //console.log(lat);
    });

    const num = Math.floor(Math.random() * 1640);
    setQuote(quotes[num].text);
    setAuthor(quotes[num].author);
  }, []);

  function changeLoc() {
    const getCity = prompt("Please Enter name of a city");
    console.log(getCity);

    const url =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      getCity +
      "&appid=" +
      api_key;
    Axios.get(url).then((res) => {
      console.log(res.data);
      setTemp(Math.round(res.data.main.temp - 273.15) + "°C");
      setTemp_min(Math.round(res.data.main.temp_min - 273.15) + "°C");
      setName(res.data.name);
      setcountry(res.data.sys.country);
    });

    const num = Math.floor(Math.random() * 1640);
    setQuote(quotes[num].text);
    setAuthor(quotes[num].author);
  }

  return (
    <div id="main-div">
      <div id="quote-cont">
        <blockquote>" {quote} "</blockquote>
        <h3>- {author}</h3>
      </div>

      <div id="main-cont">
        <div id="greeting-cont">
          <span> GOOD MORNING, IT'S CURRENTLY </span>
        </div>

        <div id="temp-cont">
          <span>{temp}</span>
        </div>

        <div id="loc-cont">
          <span>
            IN {name}, {country}
          </span>
        </div>

        <div id="ch-loc">
          <span onClick={changeLoc}> Change location? </span>
        </div>
      </div>

      <div id="more-cont">
        <button> More </button>
      </div>
    </div>
  );
}

export default API;
