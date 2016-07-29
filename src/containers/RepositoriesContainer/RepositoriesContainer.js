import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';

// Actions
import * as actionCreators from './RepositoriesDucks.js';

// Components
import RepoList from '../../components/RepoList/';

const mapStateToProps = state => ({
  isLoading: state.repositories.isLoading,
  repos: state.repositories.repos
});

const mapDispatchToProps = dispatch => bindActionCreators(actionCreators, dispatch);

class RepositoriesContainer extends Component {

  static propTypes = {
    isLoading: PropTypes.bool.isRequired,
    repos: PropTypes.array,
    load: PropTypes.func.isRequired
  };

  constructor (props) {
    super(props);
    props.load();
  }

  render () {
    const repoListProps = _.pick(this.props, ['isLoading', 'repos']);
    return <RepoList {...repoListProps} />
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RepositoriesContainer);
