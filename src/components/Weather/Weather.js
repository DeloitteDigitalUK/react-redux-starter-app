import React from 'react'
import style from './Weather.scss'

const Weather = (props) => {
  const {title} = props.weather.query.results.channel;
  const {temperature} = props.weather.query.results.channel.units.temperature;
  const {temp, text, date} = props.weather.query.results.channel.item.condition;
  const {forecast} = props.weather.query.results.channel.item;

  return (
    <div className="row weather">
      <div className="col-xs-12">
        <button className="btn" onClick={props.forecast}>Generate London weather</button>
        <h1 className={style['weather--title']}>{title}</h1>
        <div className={style['weather--today']}>
          <p>{date}</p>
          <p>{text}</p>
          <p>Temperature {temp} {temperature}</p>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <h2 className={style['weather--subtitle']}>10 day forecast</h2>
            <div className="row" >
              {forecast.map(day =>
                  <div className="col-xs-6 col-sm-4 col-lg-2" key={day.date}>
                    <p>{day.date}</p>
                    <p>High {day.high} Low {day.low}</p>
                    <p className={style.forecast}>{day.text}</p>
                  </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weather
