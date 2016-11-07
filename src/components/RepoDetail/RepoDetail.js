import React, { PropTypes } from 'react';

const RepoDetail = (props) => {
  const { isLoading, author, avatar, description, name, starsCount } = props;
  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (<div className="jumbotron text-xs-center">
    <h1>{name}</h1>
    <h5>{description}</h5>
    <img alt={name} src={avatar} />
    <p>Stars - {starsCount}</p>
    <p>Author - {author}</p>
  </div>);
};

RepoDetail.propTypes = {
  isLoading: PropTypes.bool,
  author: PropTypes.string,
  avatar: PropTypes.string,
  description: PropTypes.string,
  id: PropTypes.number,
  name: PropTypes.string,
  starsCount: PropTypes.number,
  url: PropTypes.string,
};

export default RepoDetail;
