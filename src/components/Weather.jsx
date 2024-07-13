import React, { useEffect, useState } from "react";
import api from "./Api";
import Details from "./Details";

function Weather(props) {
  const [data, setData] = useState(null); // Initialize with null or {}

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("weather", {
          params: {
            q: props.location,
          },
        });
        setData(response.data);
      } catch (error) {
        console.log("There has been some error here:", error);
      }
    };
    fetchData();
  }, [props.location]);

  return (
    <div>
      {data ? (
        <Details
          place={props.location} // Use props.location instead of location
          name={data.weather[0].main}
          desc={data.weather[0].description}
          temp={data.main.temp}
          feels_like={data.main.feels_like}
          pressure={data.main.pressure}
          wind_speed={data.wind.speed}
          humidity={data.main.humidity}
        />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Weather;
