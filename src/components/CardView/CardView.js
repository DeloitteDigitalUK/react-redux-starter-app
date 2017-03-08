import React, { PropTypes } from 'react';

const CardView = (props) => {
  const { title, text, imageUrl, imageAlt, imageWidth, imageHeight, buttonUrl, buttonText, linkUrl, linkText } = props;

  const image = imageUrl
    ? (
      <img
        className="card-img-top"
        src={imageUrl}
        alt={imageAlt}
        width={imageWidth}
        height={imageHeight}
      />
    )
    : undefined;

  const button = (buttonUrl && buttonText)
    ? (
      <a
        href={buttonUrl}
        className="btn btn-secondary"
        target="_blank"
        rel="noopener noreferrer"
      >
        {buttonText}
      </a>
      )
    : undefined;

  const link = (linkText && linkUrl)
    ? (
      <a
        href={linkUrl}
        className="btn btn-secondary"
      >
        {linkText}
      </a>
      )
    : undefined;

  return (
    <div className="card">
      {image}
      <div className="card-block">
        <h4 className="card-title">{title}</h4>
        <p className="card-text">{text}</p>
        {button}
        {link}
      </div>
    </div>
  );
};

CardView.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
  imageAlt: PropTypes.string,
  imageWidth: PropTypes.number,
  imageHeight: PropTypes.number,
  buttonUrl: PropTypes.string,
  buttonText: PropTypes.string,
  linkUrl: PropTypes.string,
  linkText: PropTypes.string,
};

export default CardView;
