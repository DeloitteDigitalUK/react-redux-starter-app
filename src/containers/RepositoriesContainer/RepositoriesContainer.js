import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Actions
import * as actionCreators from './RepositoriesDucks.js';

// Components
import RepoList from '../../components/RepoList/';

const mapStateToProps = (state) => ({
  isLoading: state.repositories.isLoading,
  repos: state.repositories.list
});

const mapDispatchToProps = (dispatch) => bindActionCreators(actionCreators, dispatch);

class RepositoriesContainer extends Component {

  static propTypes = {
    isLoading: PropTypes.bool.isRequired,
    repos: PropTypes.array,
    loadRepos: PropTypes.func.isRequired
  };

  constructor (props) {
    super(props);

    if (typeof props.repos === 'undefined') {
      props.loadRepos();
    }
  }

  render () {
    const { isLoading, repos } = this.props;

    if (repos && repos.length) {
      <RepoList repos={repos} />;
    }

    return isLoading ? <p>Loading...</p> : <p>No repositories to display.</p>;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RepositoriesContainer);
