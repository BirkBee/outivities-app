import axios from "axios";
import { useState, useEffect } from "react";
import HumiditySvg from "@/public/humidity.svg";
import TemperatureSvg from "@/public/thermometer.svg";
import DescriptionSvg from "@/public/day.svg";
import styled from "styled-components";

const areaCoordinates = {
  Hossegor: {
    latitude: 43.671285818213235,
    longitude: -1.4391322627467373,
  },
  Garmisch: {
    latitude: 47.455819636652656,
    longitude: 11.091488699407106,
  },
  "Phang Nga Bay": {
    latitude: 8.431539,
    longitude: 98.534256,
  },
  Onomichi: {
    latitude: 34.4029,
    longitude: 133.1952,
  },
  Cappadocia: {
    latitude: 38.6431,
    longitude: 34.8284,
  },
  "Fiji Islands": {
    latitude: -17.7134,
    longitude: 178.065,
  },
};
// This code is only for our initial dummy data//

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
            {" "}
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
