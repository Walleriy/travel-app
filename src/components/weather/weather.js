import React, { useState } from "react";
import './weather.scss'
import {useTranslation} from "react-i18next";

const Weather = ({city}) => {

    const {t} = useTranslation('translations');
    const [weatherData, setWeatherData] = useState('')

    const getWeather = async () => {
        const KeyWeather = 'a20a4b17a5bdf77bf7b0b7a925a9ee6d';
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KeyWeather}&lang=ru&units=metric`;
        const result = await fetch(url);
        const data = await result.json();
        if (data['message'] === 'city not found') {
            setWeatherData('Місто не знайдено!');
        } else {
            let res = {};
            res.weatherIconClassName = `weather-icon owf owf-${data.weather[0].id}`;
            res.temperature = `${t('weather.temperature')}${Math.round(data.main.temp)}°C `;
            res.humidity = `${t('weather.humidity')}${data.main.humidity}% `;
            res.wind = `${t('weather.wind')}${Math.round(data.wind.speed)} м/c `;
            setWeatherData(res);
        }
    }

    getWeather();

    return (
        <div className="weather">
            <div className="city">{city}</div>
            <i className={weatherData.weatherIconClassName}></i>
            <div className="text-information">
                <div className="temperature">{weatherData.temperature}</div>
                <div className="humidity">{weatherData.humidity}</div>
                <div className="wind">{weatherData.wind}</div>
            </div>
        </div>
    );
}

export default Weather;
