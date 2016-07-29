import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';

// Actions
import * as actionCreators from './SearchDucks.js';

// Components
import Search from '../../components/Search/';


const mapDispatchToProps = dispatch => bindActionCreators(actionCreators, dispatch);

const mapStateToProps = (state) => ({
    heading: state.search.heading,
    inputValue: state.search.inputValue,
    buttonText: state.search.buttonText,
    errorMessage: state.search.errorMessage,
})

class SearchContainer extends Component {

    static propTypes = {
        heading: PropTypes.string.isRequired,
        inputValue: PropTypes.string,
        buttonText: PropTypes.string.isRequired,
        errorMessage: PropTypes.string,
    };

    constructor (props) {
        super(props);
        props.createSearch();
    }

    render () {
        console.log(this.props.inputValue);
        const searchProps = _.pick(this.props, ['heading', 'inputValue', 'buttonText', 'errorMessage']);
        return <Search {...searchProps} onSubmit={this.props.createSearch} />
     }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);
