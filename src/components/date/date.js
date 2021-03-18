import React, { useState, useEffect } from "react";
import './date.scss'

const Date = ({ timezone }) => {


    const updateTime = () => {

        let today = new window.Date();

        return today.toLocaleString('de-DE', { timeZone: timezone });
    }


    const [date, setDate] = useState(updateTime());

    useEffect(() => {
        const timer = setTimeout(() => setDate(updateTime()), 1000);
        return () => clearTimeout(timer);
    })

    return (
        <div className="date">
            {date}
        </div>
    );
}

export default Date;
