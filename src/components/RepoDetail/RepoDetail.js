import React, { PropTypes } from 'react';

const RepoDetail = ({isLoading, author, avatar, description, name, starsCount}) => {
  if (isLoading) {
    return <p>Loading...</p>;
  }
  return <div className="jumbotron">
    <h1>{name}</h1>
    <h5>{description}</h5>
    <img src={avatar} />
    <p>Stars - {starsCount}</p>
    <p>Author - {author}</p>
  </div>;
};

RepoDetail.propTypes = {
  repos: PropTypes.arrayOf(PropTypes.shape({
    author: PropTypes.string,
    avatar: PropTypes.string,
    description: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    starsCount: PropTypes.number,
    url: PropTypes.string.isRequired
  }).isRequired)
};

export default RepoDetail;
