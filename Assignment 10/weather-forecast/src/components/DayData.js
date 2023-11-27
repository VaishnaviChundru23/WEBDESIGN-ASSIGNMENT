import React from 'react';
import { Link } from 'react-router-dom';
var moment = require('moment');

const DayData = ({ reading }) => {
  let newDate = new Date();
  const weekday = reading.dt * 1000
  newDate.setTime(weekday)


  const capitalise = (word) => {
    return word.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
  }

  const imgURL = `owf owf-${reading.weather[0].id} owf-5x`

  
  return (
    <div className="col-sm-2">
      <div className="card" style={{ backgroundColor: 'bisque' }}>
        <h3 className="card-title">{moment(newDate).format('dddd')}</h3>
        <p className="text-muted">{moment(newDate).format('MMMM Do')}</p>
        <Link to={`/weather/${moment(newDate).format('dddd')}`}>
          <i style={{color: 'black'}} className={imgURL}></i>
        </Link>
        <h2>{Math.round(reading.main.temp)} °C</h2>
        <p className='text-muted'>Max: {reading.main.temp_max} °C</p>
        <p className='text-muted'>Min: {reading.main.temp_min} °C</p>
        <div className="card-body">
          <p className="card-text">{capitalise(reading.weather[0].description)}</p>
        </div>
      </div>
    </div>
  )
}

export default DayData;