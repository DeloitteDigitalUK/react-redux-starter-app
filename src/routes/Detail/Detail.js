import React, { PropTypes } from 'react';
import RepoDetail from '../../containers/RepositoriesDetailContainer/';

const Detail = (props) => (
  <div className="row">
    <div className="col-xs-12">
      <RepoDetail id={props.params.id} />
    </div>
  </div>
);

Detail.propTypes = {
  params: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }),
};

export default Detail;
