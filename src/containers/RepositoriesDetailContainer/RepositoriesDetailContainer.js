import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';

// Actions
import * as actionCreators from './RepositoriesDetailDuck.js';

// Components
import RepoDetail from '../../components/RepoDetail/';

const mapStateToProps = (state, props) => {
  console.log('state', state);
  return {
    repos: state.repositoriesDetail.repos,
    id: props.id
  };
};

const mapDispatchToProps = dispatch => bindActionCreators(actionCreators, dispatch);

class RepositoriesDetailContainer extends Component {

  static propTypes = {
    repos: PropTypes.array,
    load: PropTypes.func.isRequired
  };

  constructor (props) {
    super(props);
    props.load();
  }

  render () {
    let repoId = parseInt(this.props.id);
    console.log('test', this.props);
    const repo = _.find(this.props.repos, {'id': repoId});
    return <RepoDetail {...repo} />
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RepositoriesDetailContainer);

