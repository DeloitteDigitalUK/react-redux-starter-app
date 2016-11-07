import React, { PropTypes } from 'react';
import CardView from '../CardView/';

const RepoList = ({ isLoading, noReposText, repos }) => {
  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (!repos || repos.length === 0) {
    return <p>{noReposText}</p>;
  }

  return (<div className="card-columns">
    {repos.map(repo =>
      <CardView
        key={repo.id}
        title={repo.name}
        text={repo.description}
        imageUrl={repo.avatar}
        imageAlt={`Owner: ${repo.author}`}
        imageWidth={180}
        imageHeight={180}
        buttonUrl={repo.url}
        buttonText="View on Github"
        linkText="View details"
        linkUrl={`/details/${repo.id}`}
      />,
    )}
  </div>);
};

RepoList.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  noReposText: PropTypes.string.isRequired,
  repos: PropTypes.arrayOf(PropTypes.shape({
    author: PropTypes.string,
    avatar: PropTypes.string,
    description: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    starsCount: PropTypes.number,
    url: PropTypes.string.isRequired,
  }).isRequired),
};

export default RepoList;
