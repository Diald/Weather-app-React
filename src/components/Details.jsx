import React, { useState, useEffect } from "react";
import "../styles/Details.css";
import Search from "./Search";

function Details(props) {
  const [color, setColor] = useState("rgb(30, 120, 255)");

  useEffect(() => {
    handleColor(props.name);
  }, [props.name]);

  function handleColor(weatherName) {
    if (weatherName === "Clouds") {
      setColor(
        "https://img.freepik.com/free-photo/beautiful-scenery-cloudy-sky-landscape-daytime_181624-41959.jpg"
      );
    } else if (weatherName === "Clear") {
      setColor(
        "https://media.istockphoto.com/id/1007768414/photo/blue-sky-with-bright-sun-and-clouds.webp?b=1&s=170667a&w=0&k=20&c=rHd7W8nOPEdKEnuMgpSnfC2OC9B_rwMe1HS7k_d-ORc="
      );
    } else if (weatherName === "Haze") {
      setColor(
        "https://cff2.earth.com/uploads/2018/11/13015448/what-is-haze-960x640.jpg"
      );
    } else if (weatherName === "Rain") {
      setColor(
        "https://media.istockphoto.com/id/498063665/photo/rainy-landscape.jpg?s=612x612&w=0&k=20&c=2KhHJguvlQvd83c-CJeOiuEKI323gbtSIf1n2sNdXJc="
      );
    }
  }

  return (
    <div className="container">
      <div className="card" style={{ backgroundImage: `url(${color})` }}>
        <h1>{props.place}</h1>
        <h2>
          {props.name} - {props.desc}
        </h2>
        <p>Temperature - {props.temp}</p>
        <p>Feels Like - {props.feels_like}</p>
        <p>Wind Speed - {props.wind_speed}</p>
        <p>Pressure - {props.pressure}</p>
        <p>Humidity - {props.humidity}</p>
      </div>
    </div>
  );
}

export default Details;
