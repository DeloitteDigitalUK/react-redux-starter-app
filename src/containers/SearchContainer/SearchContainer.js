import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Actions
import * as actionCreators from './SearchDucks.js';

// Components
import Search from '../../components/Search/';


const mapDispatchToProps = dispatch => bindActionCreators(actionCreators, dispatch);

const mapStateToProps = (state) => ({
    search : state.search;
})

class SearchContainer extends Component {

  static propTypes = {
    heading: PropTypes.string.isRequired,
    inputValue: PropTypes.string,
    buttonText: PropTypes.string.isRequired,
    errorMessage: PropTypes.string
  };

  constructor (props) {
    super(props);
    props.createSearch();
  }

  render () {
    return <Search />
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);
