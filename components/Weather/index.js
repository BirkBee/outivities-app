import axios from "axios";
import { useState, useEffect } from "react";
import styled from "styled-components";
import Icon from "../Icons";

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
            <Icon variant={"temperature"} size={25} />
            <StyledWeatherData>
              {weatherData.data.main.temp}°C
            </StyledWeatherData>
          </StyledWeatherInfo>
          <StyledWeatherInfo>
            <Icon variant={"weather"} size={25} />
            <StyledWeatherData>
              {weatherData.data.weather[0].description}
            </StyledWeatherData>
          </StyledWeatherInfo>
          <StyledWeatherInfo>
            <Icon variant={"humidity"} size={25} />
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
  font-size: 10px;
`;
