import React from 'react';
import { storiesOf } from '@kadira/storybook';

import Tweet from './index.js';

const tweets = [
   {
      "text": "RT @iamdevloper: If a startup doesn\u2019t list \u201cOffice Dog\u201d as a team member on their about page, are they even a real startup?",
      "id": 1,
      "image": "http:\/\/abs.twimg.com\/images\/themes\/theme15\/bg.png",
      "screen_name": "InTheLoose",
      "user_name": "@garry575",
      "lang": "en"
   },
   {
      "text": "Testing this out",
      "id": 2,
      "image": "http:\/\/abs.twimg.com\/images\/themes\/theme15\/bg.png",
      "screen_name": "InTheLoose",
      "user_name": "@garry575",
      "lang": "en"
   }
]

storiesOf('Tweets', module)
    .add('Single tweet', () => (
        <div className="col-xs-8 col-xs-offset-2">
            <ul>
                <Tweet text={tweets[0].text} image={tweets[0].image} screenName={tweets[0].screen_name} userName={tweets[0].user_name}/>
            </ul>
        </div>
    ))
    .add('List of tweets', () => (
        <div className="col-xs-8 col-xs-offset-2">
            <ul>
                {tweets.map((tweet, i) => (
                    <Tweet key={tweet.id} text={tweet.text} image={tweet.image} screenName={tweet.screen_name} userName={tweet.user_name} />
                ))}
            </ul>
        </div>
    ));