import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';

// Actions
import * as actionCreators from './RepositoriesDetailDuck';

// Components
import RepoDetail from '../../components/RepoDetail/';

const mapStateToProps = (state, props) =>
   ({
     repos: state.repositoriesDetail.repos,
     id: props.id,
   })
;

const mapDispatchToProps = dispatch => bindActionCreators(actionCreators, dispatch);

class RepositoriesDetailContainer extends Component {

  static propTypes = {
    id: PropTypes.string.isRequired,
    repos: PropTypes.array,
    load: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    props.load();
  }

  render() {
    const repoId = parseInt(this.props.id, 10);
    const repo = _.find(this.props.repos, { id: repoId });
    return <RepoDetail {...repo} />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RepositoriesDetailContainer);
