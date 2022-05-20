import React from 'react';

const Bottom = ({feels, humidity, wind, err}) => {
  return (
    <div className='Bottom'>
        <div className="wind">
            <p className='bold'>{!err? `${Number(wind).toFixed(2)}`: ''} MPH</p>
            <p>Wind Speed</p>
        </div>
        <div className="feels">
            <p className='bold'>{!err? `${Number(feels).toFixed(2)}`: '' }&#8451;</p>
            <p>Feels Like</p>
        </div>
        <div className="humidity">
            <p className='bold'>{!err? `${humidity}`: ''} %</p>
            <p>Humidity</p>
        </div>
    </div>
  )
}

export default Bottom