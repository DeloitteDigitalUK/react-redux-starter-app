import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const tweets = [
    {
        id: "1",
        date: "12 July 2016 0900",
        message: "This is my first tweet"
    },{
        id: "2",
        date: "13 July 2016 0900",
        message: "This is my next tweet"
    },{
        id: "3",
        date: "15 July 2016 0900",
        message: "This is my last tweet"
    }
];

function replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (tweet) => {
    return replaceAll(tweet.title, ' ', '-');
};

class TweetApi {
    static getAllTweets() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Object.assign([], tweets));
            }, delay);
        });
    }

    static saveTweet(tweet) {
        console.log("mockTweetApi:saveTweet");
        tweet = Object.assign({}, tweet); // to avoid manipulating object passed in.
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // Simulate server-side validation
                const minTweetTitleLength = 1;
                if (tweet.title.length < minTweetTitleLength) {
                    reject(`Title must be at least ${minTweetTitleLength} characters.`);
                }

                if (tweet.id) {
                    const existingTweetIndex = tweets.findIndex(a => a.id == tweet.id);
                    tweets.splice(existingTweetIndex, 1, tweet);
                } else {
                    //Just simulating creation here.
                    //The server would generate ids and watchHref's for new tweets in a real app.
                    //Cloning so copy returned is passed by value rather than by reference.
                    tweet.id = generateId(tweet);
                    tweet.date = "20 July 2016 1900";
                    tweet.message = "Created tweet";
                    tweets.push(tweet);
                }

                resolve(tweet);
            }, delay);
        });
    }

    static deleteTweet(tweetId) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const indexOfTweetToDelete = tweets.findIndex(tweet => {
                    tweet.id == tweetId;
                });
                tweets.splice(indexOfTweetToDelete, 1);
                resolve();
            }, delay);
        });
    }
}

export default TweetApi;