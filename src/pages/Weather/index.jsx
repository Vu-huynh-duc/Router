import { useState } from "react";

const Weather = () => {
    const weatherData = {
        "hanoi": { city: "Hà Nội", temp: 28, weather: "Nắng", humidity: 65 },
        "hcm": { city: "TP.HCM", temp: 32, weather: "Có mây", humidity: 78 },
        "danang": { city: "Đà Nẵng", temp: 30, weather: "Mưa nhẹ", humidity: 82 }
    };

    const [weather, setWeather] = useState(weatherData)
    const [key, setKey] = useState('hanoi')

    const itemWeather = weather[key]

    const refresh = () => {
        const randomNumber = () => {
            return (Math.floor(Math.random() * 11) - 5)
        }
        const newWeatherData = {}
        Object.keys(weather).forEach(key => {
            newWeatherData[key] = {
                ...weather[key],
                temp: weather[key].temp + randomNumber(),
                humidity: weather[key].humidity + randomNumber(),

            }
        })
        setWeather(newWeatherData)
        setKey('hanoi')
    }


    return <>
        <h1>Weather</h1>
        <select
            value={key}
            onChange={
                (e) => {
                    const key = e.target.value
                    setKey(key)
                }
            }
        >
            <option value="hanoi">Hà Nội</option>
            <option value="danang">Đà Nẵng</option>
            <option value="hcm">TP. Hồ Chí Minh</option>
        </select>

        <h2>{itemWeather.city}</h2>
        <p>Nhiệt độ : {itemWeather.temp}°C</p>
        <p>Tình trạng thời tiết: {itemWeather.weather} {itemWeather.weather === "Nắng" ? '☀️' : itemWeather.weather === "Có mây" ? '🌤️' : '🌧️'} </p>
        <p>Độ ẩm: {itemWeather.humidity}%</p>

        <button onClick={refresh}>Refresh</button>

    </>
}

export default Weather