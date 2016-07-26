import React, { PropTypes } from 'react';

const CardView = (props) => {
  const { title, text, imageUrl, imageAlt, imageWidth, imageHeight, buttonUrl, buttonText } = props;

  let imageEle;
  if (imageUrl) {
    imageEle = <img
      className="card-img-top"
      src={imageUrl}
      alt={imageAlt}
      width={imageWidth}
      height={imageHeight}
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
  imageWidth: PropTypes.number,
  imageHeight: PropTypes.number,
  buttonUrl: PropTypes.string,
  buttonText: PropTypes.string
};

export default CardView;
