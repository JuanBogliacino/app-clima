import { useState } from "react";
import styles from './weatherForm.module.css'

export default function WeatherForm({onChangeCity}) {
    const [city, setCity] = useState('')

    const onChange = (e) => {
        const value = e.target.value;
        setCity(value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (city == '') return

        onChangeCity(city)
    }

    return (
        <form onSubmit={handleSubmit} className={styles.container}>
            <input type="text" onChange={onChange} value={city} className={styles.input}/>
        </form>
    )
}