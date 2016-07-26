import React from 'react'
import style from './Weather.scss'

const WeatherView = (props) => {
  const { channel } = props.weather.query.results;
  const { title } = channel;
  const { forecast } = channel.item;
  const { temp, text, date } = channel.item.condition;
  const { temperature } = channel.units.temperature;

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

export default WeatherView
