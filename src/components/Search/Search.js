import React, {PropTypes} from 'react';
import cx from 'classnames';

import styles from './Search.scss';
import SearchIcon from './assets/light-searchIcon.png';
import TwitterIcon from './assets/Twitter_Logo_Blue.png';

const Search = (props) => {
const {label, inputValue, buttonText, errorMessage} = props;

    return (
        <div>
            <div className="row">
                <img src={TwitterIcon} className={styles.twitterIcon} alt="twitter-icon" height="80" width="80"/>
                <div className={styles.label}>
                    <h3> {label}</h3>
                </div>
            </div>
            <div className="row">
                <div className={cx('col-xs-6')}>
                    <input type="text" value={inputValue} className={cx('form-control'), styles.input}/>
                    <img src={SearchIcon} className={styles.icon}/>
                </div>
                <div className={cx('col-xs-6')}>
                    <button type="submit" className={cx('btn', styles.button )}>{buttonText}</button>
                </div>
            </div>
            <div className="row">
                <div className={cx('col-xs-12'), styles.error}>
                    <h5>{errorMessage}</h5>
                </div>
            </div>
        </div>
        );
};

Search.propTypes = {
label: PropTypes.string.isRequired,
inputValue: PropTypes.string,
buttonText: PropTypes.string.isRequired,
errorMessage: PropTypes.string
};

export default Search;
