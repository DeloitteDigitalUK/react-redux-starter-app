import React, { PropTypes, Component } from 'react';
import cx from 'classnames';

import styles from './Search.scss';
import SearchIcon from './assets/light-searchIcon.png';
import GitHubIcon from './assets/Octocat.png';

class Search extends Component {

  static propTypes = {
    heading: PropTypes.string.isRequired,
    inputValue: PropTypes.string,
    buttonText: PropTypes.string.isRequired,
    errorMessage: PropTypes.string,
    onSubmit: PropTypes.func,
  };


  render() {
    const { heading, inputValue, buttonText, errorMessage, onSubmit } = this.props;
    return (
          <div>
              <div className="row">
                  <img src={GitHubIcon} className={styles.gitHubIcon} alt="twitter-icon" height="70" width="80" />
                  <div className={styles.label}>
                      <h3>{heading}</h3>
                  </div>
              </div>
              <div className="row">
                  <div className="col-xs-6">
                      <input ref="textInput" type="text" defaultValue={inputValue} className={cx('form-control'), styles.input} />
                      <img src={SearchIcon} className={styles.icon} />
                  </div>
                  <div className="col-xs-6">
                      <button type="submit" className={cx('btn', styles.button)} onClick={() => onSubmit(this.refs.textInput.value)}>{buttonText}</button>
                  </div>
              </div>
              <div className="row">
                  <div className={cx('col-xs-12'), styles.error}>
                      <h5>{errorMessage}</h5>
                  </div>
              </div>
          </div>
          );
  }
    }
export default Search;
