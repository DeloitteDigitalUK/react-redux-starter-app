import { connect } from 'react-redux'
import { forecast } from '../modules/weather'
// End point
//https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22belfast%2C%20uk%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys

const belfastWeather = [
    {
     "query": {
      "count": 1,
      "created": "2016-07-20T14:14:06Z",
      "lang": "en-US",
      "results": {
       "channel": {
        "units": {
         "distance": "mi",
         "pressure": "in",
         "speed": "mph",
         "temperature": "F"
        },
        "title": "Yahoo! Weather - Belfast, Northern Ireland, GB",
        "link": "http://us.rd.yahoo.com/dailynews/rss/weather/Country__Country/*https://weather.yahoo.com/country/state/city-44544/",
        "description": "Yahoo! Weather for Belfast, Northern Ireland, GB",
        "language": "en-us",
        "lastBuildDate": "Wed, 20 Jul 2016 03:14 PM BST",
        "ttl": "60",
        "location": {
         "city": "Belfast",
         "country": "United Kingdom",
         "region": " Northern Ireland"
        },
        "wind": {
         "chill": "68",
         "direction": "250",
         "speed": "11"
        },
        "atmosphere": {
         "humidity": "90",
         "pressure": "996.0",
         "rising": "0",
         "visibility": "15.3"
        },
        "astronomy": {
         "sunrise": "5:17 am",
         "sunset": "9:42 pm"
        },
        "image": {
         "title": "Yahoo! Weather",
         "width": "142",
         "height": "18",
         "link": "http://weather.yahoo.com",
         "url": "http://l.yimg.com/a/i/brand/purplelogo//uh/us/news-wea.gif"
        },
        "item": {
         "title": "Conditions for Belfast, Northern Ireland, GB at 11:00 AM BST",
         "lat": "54.59227",
         "long": "-5.92621",
         "link": "http://us.rd.yahoo.com/dailynews/rss/weather/Country__Country/*https://weather.yahoo.com/country/state/city-44544/",
         "pubDate": "Wed, 20 Jul 2016 11:00 AM BST",
         "condition": {
          "code": "26",
          "date": "Wed, 20 Jul 2016 11:00 AM BST",
          "temp": "68",
          "text": "Cloudy"
         },
         "forecast": [
          {
           "code": "12",
           "date": "20 Jul 2016",
           "day": "Wed",
           "high": "69",
           "low": "59",
           "text": "Rain"
          },
          {
           "code": "39",
           "date": "21 Jul 2016",
           "day": "Thu",
           "high": "67",
           "low": "58",
           "text": "Scattered Showers"
          },
          {
           "code": "28",
           "date": "22 Jul 2016",
           "day": "Fri",
           "high": "64",
           "low": "57",
           "text": "Mostly Cloudy"
          },
          {
           "code": "28",
           "date": "23 Jul 2016",
           "day": "Sat",
           "high": "66",
           "low": "54",
           "text": "Mostly Cloudy"
          },
          {
           "code": "28",
           "date": "24 Jul 2016",
           "day": "Sun",
           "high": "66",
           "low": "57",
           "text": "Mostly Cloudy"
          },
          {
           "code": "12",
           "date": "25 Jul 2016",
           "day": "Mon",
           "high": "65",
           "low": "55",
           "text": "Rain"
          },
          {
           "code": "39",
           "date": "26 Jul 2016",
           "day": "Tue",
           "high": "64",
           "low": "54",
           "text": "Scattered Showers"
          },
          {
           "code": "28",
           "date": "27 Jul 2016",
           "day": "Wed",
           "high": "64",
           "low": "55",
           "text": "Mostly Cloudy"
          },
          {
           "code": "12",
           "date": "28 Jul 2016",
           "day": "Thu",
           "high": "63",
           "low": "53",
           "text": "Rain"
          },
          {
           "code": "12",
           "date": "29 Jul 2016",
           "day": "Fri",
           "high": "65",
           "low": "56",
           "text": "Rain"
          }
         ],
         "description": "<![CDATA[<img src=\"http://l.yimg.com/a/i/us/we/52/26.gif\"/>\n<BR />\n<b>Current Conditions:</b>\n<BR />Cloudy\n<BR />\n<BR />\n<b>Forecast:</b>\n<BR /> Wed - Rain. High: 69Low: 59\n<BR /> Thu - Scattered Showers. High: 67Low: 58\n<BR /> Fri - Mostly Cloudy. High: 64Low: 57\n<BR /> Sat - Mostly Cloudy. High: 66Low: 54\n<BR /> Sun - Mostly Cloudy. High: 66Low: 57\n<BR />\n<BR />\n<a href=\"http://us.rd.yahoo.com/dailynews/rss/weather/Country__Country/*https://weather.yahoo.com/country/state/city-44544/\">Full Forecast at Yahoo! Weather</a>\n<BR />\n<BR />\n(provided by <a href=\"http://www.weather.com\" >The Weather Channel</a>)\n<BR />\n]]>",
         "guid": {
          "isPermaLink": "false"
         }
        }
       }
      }
     }
    }
  ];
/*  This is a container component. Notice it does not contain any JSX,
    nor does it import React. This component is **only** responsible for
    wiring in the actions and state necessary to render a presentational
    component - in this case, the counter:   */

import Weather from 'components/Weather'

/*  Object of action creators (can also be function that returns object).
    Keys will be passed as props to presentational components. Here we are
    implementing our wrapper around increment; the component doesn't care   */

const mapActionCreators = {
  forecast: () => forecast('Belfast, uk')
}

const mapStateToProps = (state) => ({
  weather: belfastWeather
})

/*  Note: mapStateToProps is where you should use `reselect` to create selectors, ie:

    import { createSelector } from 'reselect'
    const counter = (state) => state.counter
    const tripleCount = createSelector(counter, (count) => count * 3)
    const mapStateToProps = (state) => ({
      counter: tripleCount(state)
    })

    Selectors can compute derived data, allowing Redux to store the minimal possible state.
    Selectors are efficient. A selector is not recomputed unless one of its arguments change.
    Selectors are composable. They can be used as input to other selectors.
    https://github.com/reactjs/reselect    */

export default connect(mapStateToProps, mapActionCreators)(Weather)
