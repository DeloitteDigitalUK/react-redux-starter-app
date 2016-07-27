import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Actions
import * as actionCreators from './RepositoriesDucks.js';

// Components
import RepoList from '../../components/RepoList/';

const mapStateToProps = state => ({
  isLoading: state.repositories.isLoading,
  repos: state.repositories.list
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

    if (typeof props.repos === 'undefined') {
      props.load();
    }
  }

  render () {
    const { isLoading, repos } = this.props;
    return <RepoList repos={repos} isLoading={isLoading} />
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RepositoriesContainer);
