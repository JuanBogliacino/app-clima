import { useEffect, useState } from "react"
import WeatherForm from "./weatherForm"
import WeatherMainInfo from "./weatherMainInfo"
import Loading from "./loading"
import styles from './weatherApp.module.css'

const REACT_APP_KEY = '1b27307cc5b94f18952185201230806'
const REACT_APP_URL = 'http://api.weatherapi.com/v1/current.json?aqi=no'

export default function WeatherApp() {
    const [weather, setWeather] = useState(null)
    const [search, setSearch] = useState(null)

    useEffect(() => {
        loadInfo()
    }, [])

    useEffect(() => {
        document.title = `Weather | ${weather ? weather.location.name : ''}`
    }, [weather])

    const loadInfo = async(city = 'rosario') => {
        try {
            const request = await fetch(`${REACT_APP_URL}&key=${REACT_APP_KEY}&q=${city}`)

            const json = await request.json()

            if (json.error) {
                setSearch('no se encontró el clima de la localidad que buscas.')
                return
            }

            setTimeout(() => {
                setWeather(json)
            }, 1000)

            // console.log(json);
        }
        catch (error) {}
    }

    const handleChangeCity = (city) => {
        setWeather(null)
        loadInfo(city)
    }

    return (
        <div className={styles.weatherContainer}>
            <h1 style={{color: '#fff'}}>App de clima</h1>
            {
                search
                ? 
                <>
                 <h3 style={{color: '#fff'}}>{search}</h3>
                 <button onClick={() => window.location.reload()}>Volver</button>
                </>
                :
                <>
                 <WeatherForm onChangeCity={handleChangeCity} />
                 {weather ? <WeatherMainInfo weather={weather} /> : <Loading />}
                </>
            }
        </div>
    )
}