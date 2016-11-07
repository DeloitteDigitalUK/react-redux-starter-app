import React, { PropTypes } from 'react';
import style from './Weather.scss';

const WeatherViewForecastItem = ({ date, high, low, text }) => (
  <div className="col-xs-6 col-sm-4 col-lg-2">
    <p className={style['forecast--item']}>{date}</p>
    <p className={style['forecast--item']}>High {high} Low {low}</p>
    <p className={style.forecast}>{text}</p>
  </div>
);

WeatherViewForecastItem.propTypes = {
  date: PropTypes.string,
  high: PropTypes.string,
  low: PropTypes.string,
  text: PropTypes.string,
};

const WeatherView = (props) => {
  const { title, forecast, unit, todaysCondition, todaysDate, temperature } = props.weather;
  return (
    <div className="row weather">
      <div className="col-xs-12">
        <h1 className={style['weather--title']}>{title}</h1>
        <div className={style['weather--today']}>
          <p className={style['forecast--item']}>{todaysDate}</p>
          <p className={style['forecast--item']}>{todaysCondition}</p>
          <p>Temperature {temperature} {unit}</p>
          <button className="btn btn-primary" onClick={props.forecastWeather}>
            Generate London weather
          </button>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <h2 className={style['weather--subtitle']}>10 day forecast</h2>
            <div className="row" >
              {forecast.map(day =>
                <WeatherViewForecastItem {...day} key={day.date} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

WeatherView.propTypes = {
  weather: PropTypes.object.isRequired,
  forecastWeather: PropTypes.func,
};

export default WeatherView;
