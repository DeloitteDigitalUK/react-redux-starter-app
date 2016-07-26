import React, { PropTypes } from 'react';
import cx from 'classnames';

import styles from './CardView.scss';

const CardView = (props) => {
  const { title, text, imageUrl, imageAlt, buttonUrl, buttonText } = props;

  let imageEle;
  if (imageUrl) {
    imageEle = <img
      className={cx(styles.image, 'card-img-top')}
      src={imageUrl}
      alt={imageAlt}
      />;
  }

  let buttonEle;
  if (buttonUrl && buttonText) {
    buttonEle = <a
      href={buttonUrl}
      className="btn btn-secondary"
      target="_blank"
      rel="noopener noreferrer">
      {buttonText}
    </a>;
  }

  return (
    <div className="card">
      {imageEle}
      <div className="card-block">
        <h4 className="card-title">{title}</h4>
        <p className="card-text">{text}</p>
        {buttonEle}
      </div>
    </div>
  );
};

CardView.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
  imageAlt: PropTypes.string,
  buttonUrl: PropTypes.string,
  buttonText: PropTypes.string
};

export default CardView;
