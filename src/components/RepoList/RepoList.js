import React, { PropTypes } from 'react';
import CardView from '../CardView/';

const RepoList = ({ repos }) => (
  <div className="card-columns">
    {repos.map(repo =>
      <CardView
        key={repo.id}
        title={repo.name}
        text={repo.description}
        imageUrl={repo.avatar}
        imageAlt={`Owner: ${repo.author}`}
        buttonUrl={repo.url}
        buttonText="View on Github"
      />
    )}
  </div>
);

RepoList.propTypes = {
  repos: PropTypes.arrayOf(PropTypes.shape({
    author: PropTypes.string,
    avatar: PropTypes.string,
    description: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    starsCount: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  }).isRequired).isRequired
};

export default RepoList;
