import axios from "axios";
import { useState, useEffect } from "react";
import useLocalStorage from "use-local-storage";
import HumiditySvg from "@/public/humidity.svg";
import TemperatureSvg from "@/public/thermometer.svg";
import DescriptionSvg from "@/public/day.svg";
import styled from "styled-components";

// export default function Weather({ currentOutivity = {}, outivities }) {
//   const [weatherData, setWeatherData] = useLocalStorage({ lat: "", lng: "" });

//   const fetchData = async () => {
//     try {
//       const latitude = initialOutivities.latitude;
//       const longitude = initialOutivities.longitude;

//       if (!latitude || !longitude) {
//         console.error(`Coordinates not found for area: ${area}`);
//         return;
//       }

//       const response = await axios.get(
//         `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=9e7a02e3cc30d92b7c137c9919b52688`
//       );
//       setWeatherData(response.data);
//     } catch (error) {
//       console.error("Error fetching weather data:", error);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

export default function Weather({ area }) {
  const [weatherData, setWeatherData] = useState();

  const { latitude, longitude } = areaCoordinates[area] || {};

  const fetchData = async () => {
    try {
      if (!latitude || !longitude) {
        console.error(`Coordinates not found for area: ${area}`);
        return;
      }

      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=9e7a02e3cc30d92b7c137c9919b52688`
      );
      setWeatherData(response.data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [latitude, longitude]);
  return (
    <>
      {weatherData ? (
        <StyledWeatherContainer>
          <StyledWeatherInfo>
            <TemperatureSvg />
            <StyledWeatherData>{weatherData.main.temp}°C</StyledWeatherData>
          </StyledWeatherInfo>
          <StyledWeatherInfo>
            <DescriptionSvg />
            <StyledWeatherData>
              {weatherData.weather[0].description}
            </StyledWeatherData>
          </StyledWeatherInfo>
          <StyledWeatherInfo>
            <HumiditySvg />
            <StyledWeatherData>{weatherData.main.humidity}%</StyledWeatherData>
          </StyledWeatherInfo>
        </StyledWeatherContainer>
      ) : (
        <p>Loading weather data...</p>
      )}
    </>
  );
}

const StyledWeatherContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  font-size: 11px;
  width: 300px;
  margin: 10px 0 0 0;
`;
const StyledWeatherInfo = styled.div`
  text-align: center;
  align-items: center;
`;
const StyledWeatherData = styled.p`
  margin: 0;
`;
