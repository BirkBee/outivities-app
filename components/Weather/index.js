import axios from "axios";
import { useState, useEffect } from "react";
import useLocalStorage from "use-local-storage";
import HumiditySvg from "@/public/humidity.svg";
import TemperatureSvg from "@/public/thermometer.svg";
import DescriptionSvg from "@/public/day.svg";
import styled from "styled-components";

export default function Weather({ outivity }) {
  const [weatherData, setWeatherData] = useState(null);

  const { lat, lng } = [outivity.lat, outivity.lng];

  const fetchData = async () => {
    try {
      if (!outivity.lat || !outivity.lng) {
      }

      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${outivity.lat}&lon=${outivity.lng}&units=metric&appid=9e7a02e3cc30d92b7c137c9919b52688`
      );

      setWeatherData(response);
    } catch (error) {}
  };

  useEffect(() => {
    fetchData();
  }, [outivity.lat, outivity.lng]);

  return (
    <>
      {weatherData ? (
        <StyledWeatherContainer>
          <StyledWeatherInfo>
            <TemperatureSvg />
            <StyledWeatherData>
              {weatherData.data.main.temp}°C
            </StyledWeatherData>
          </StyledWeatherInfo>
          <StyledWeatherInfo>
            <DescriptionSvg />
            <StyledWeatherData>
              {weatherData.data.weather[0].description}
            </StyledWeatherData>
          </StyledWeatherInfo>
          <StyledWeatherInfo>
            <HumiditySvg />
            <StyledWeatherData>
              {weatherData.data.main.humidity}%
            </StyledWeatherData>
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
