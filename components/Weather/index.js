import axios from "axios";
import { useState } from "react";
import styled from "styled-components";
import Icon from "../Icons";

export default function Weather({ outivity }) {
  const [weatherData, setWeatherData] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${outivity.lat}&lon=${outivity.lng}&units=metric&appid=${process.env.NEXT_PUBLIC_OPENWEATHERMAP_API_KEY}`
      );

      setWeatherData(response.data);
      setErrorMessage(null);
    } catch (error) {
      console.error("Error fetching weather data: ", error);
      setErrorMessage("Weather data is not available at the moment...");
    }
  };

  useState(() => {
    fetchData();
  }, [outivity.lat, outivity.lng]);

  return (
    <>
      {errorMessage ? (
        <StyledInfoMessage>{errorMessage}</StyledInfoMessage>
      ) : weatherData ? (
        <StyledWeatherContainer>
          <StyledWeatherInfo>
            <Icon variant={"temperature"} size={25} />
            <StyledWeatherData>{weatherData.main.temp}°C</StyledWeatherData>
          </StyledWeatherInfo>
          <StyledWeatherInfo>
            <Icon variant={"weather"} size={25} />
            <StyledWeatherData>
              {weatherData.weather[0].description}
            </StyledWeatherData>
          </StyledWeatherInfo>
          <StyledWeatherInfo>
            <Icon variant={"humidity"} size={25} />
            <StyledWeatherData>{weatherData.main.humidity}%</StyledWeatherData>
          </StyledWeatherInfo>
        </StyledWeatherContainer>
      ) : (
        <StyledInfoMessage>Loading weather data...</StyledInfoMessage>
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
`;

const StyledWeatherData = styled.p`
  margin: 0;
  font-size: 10px;
`;

const StyledInfoMessage = styled.p`
  color: var(--lightgray-color);
  font-size: 12px;
`;
