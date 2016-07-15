import React, { PropTypes } from 'react';
import cx from 'classnames';

import styles from './TextQuestion.scss';

const TextQuestion = (props) => {
  const { label, value } = props;
  return (
    <div className="row">
      <div className={cx('col-xs-12', 'col-sm-3', styles.label)}>
        {label}
      </div>

      <div className={cx('col-xs-12', 'col-sm-9')}>
        <input type="text" value={value} className={styles.input} />
      </div>
    </div>
  );
};

TextQuestion.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string
};

export default TextQuestion;
