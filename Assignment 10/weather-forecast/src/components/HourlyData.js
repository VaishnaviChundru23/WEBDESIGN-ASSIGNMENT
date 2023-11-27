import React from 'react';

var moment = require('moment');

const HourlyData = ({ reading , day}) => {
    let newDate = new Date();
    const weekday = reading.dt * 1000
    newDate.setTime(weekday)


    const capitalise = (word) => {
        return word.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
    }

    const imgURL = `owf owf-${reading.weather[0].id} owf-5x`

    if (moment(newDate).format('dddd') === day) {
        return (
            <div className="col-sm-3 mt-4">
                <div className="card" style={{ backgroundColor: 'bisque' }}>
                    <h3 className="card-title">{moment(newDate).format('dddd')}</h3>
                    <p className="text-muted">{moment(newDate).format('MMMM Do, h:mm a')}</p>
                    <i style={{ color: 'black' }} className={imgURL}></i>
                    <h2>{Math.round(reading.main.temp)} °C</h2>
                    <div className="card-body">
                        <p className="card-text">{capitalise(reading.weather[0].description)}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default HourlyData;