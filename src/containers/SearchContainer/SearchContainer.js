import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';

// Actions
import * as actionCreators from './SearchDucks';

// Components
import Search from '../../components/Search/';

const mapDispatchToProps = dispatch => bindActionCreators(actionCreators, dispatch);

const mapStateToProps = state => ({
  heading: state.search.heading,
  inputValue: state.search.inputValue,
  buttonText: state.search.buttonText,
  errorMessage: state.search.errorMessage,
});

const SearchContainer = (props) => {
  const searchProps = _.pick(props, ['heading', 'inputValue', 'buttonText', 'errorMessage']);
  return <Search {...searchProps} onSubmit={props.createSearch} />;
};

SearchContainer.propTypes = {
  heading: PropTypes.string.isRequired,
  inputValue: PropTypes.string,
  buttonText: PropTypes.string.isRequired,
  errorMessage: PropTypes.string,
  createSearch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);
