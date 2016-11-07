import React, { PropTypes } from 'react';
import RepoDetail from '../../containers/RepositoriesDetailContainer/';

export const Detail = (props) => {
  console.log('hi', props);
  return <div className="row">
    <div className="col-xs-12">
      <RepoDetail id={props.params.id} />
    </div>
  </div>;
};

Detail.propTypes = {
  params: PropTypes.shape({
    id: PropTypes.string.isRequired,
  })
};

export default Detail;
