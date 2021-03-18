import React, { useState, useEffect } from "react";
import './date.scss'

const Date = ({ timezone }) => {

    const [date, setDate] = useState('');

    const updateTime = () => {

        let today = new window.Date();

        const localTime = today.toLocaleString('de-DE', { timeZone: timezone });

        console.log(localTime);

        setDate(localTime);
    }

    useEffect(() => {
        const timer = setTimeout(() => updateTime(), 1000);
        return () => clearTimeout(timer);
    })

    return (
        <div className="date">
            {date}
        </div>
    );
}

export default Date;
