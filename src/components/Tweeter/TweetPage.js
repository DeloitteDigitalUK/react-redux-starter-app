import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {browserHistory} from 'react-router';

import TweetList from './TweetList';

class TweetPage extends React.Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        const {tweets} = this.props;

        return (
            <div>
                <h1>Tweets</h1>
                <TweetList tweets={tweets}/>
            </div>
        );
    }
}


TweetPage.propTypes = {
    tweets: PropTypes.array.isRequired
};


/* *** Connect Code *** **/

function mapStateToProps(state, ownProps) {
    return {
        tweets: state.tweets
    };
}

function mapDispatchToProps(dispatch) {
    return {
        //actions : bindActionCreators(tweetActions, dispatch)
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(TweetList);