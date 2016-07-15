import React, {PropTypes} from 'react';


const TweetList = ({tweets}) => {
    return (
        <table className="table">
            <thead>
            <tr>
                <th>Date</th>
                <th>Tweet</th>
            </tr>
            </thead>

            <tbody>
            {tweets.map(tweet =>
                <tr key={tweet.id}>
                    <td>
                        {tweet.date}
                    </td>
                    <td>
                        {tweet.message}
                    </td>
                </tr>
            )}
            </tbody>
        </table>
    );
};

TweetList.propTypes = {
    tweets : PropTypes.array.isRequired
};

export default TweetList;
