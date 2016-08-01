import React from 'react';
import RepoDetail from '../../containers/RepositoriesDetailContainer/';

export const Detail = (props) => (
  <div className="row">
    <div className="col-xs-12">
      <RepoDetail id={props.params.id} />
    </div>
  </div>
);

export default Detail;
