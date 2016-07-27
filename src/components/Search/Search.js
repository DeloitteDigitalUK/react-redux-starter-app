import React, {PropTypes} from 'react';
import cx from 'classnames';

import styles from './Search.scss';
import SearchIcon from './assets/light-searchIcon.png';
import GitHubIcon from './assets/Octocat.jpg';

const Search = (props) => {
const {heading, inputValue, buttonText, errorMessage} = props;

    return (
        <div>
            <div className="row">
                <img src={GitHubIcon} className={styles.gitHubIcon} alt="twitter-icon" height="80" width="80"/>
                <div className={styles.label}>
                    <h3>{heading}</h3>
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
