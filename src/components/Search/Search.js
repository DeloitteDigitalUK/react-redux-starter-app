import React, {Component} from 'react'
import {reduxForm} from 'redux-form';
import {createSearch} from '../../routes/Search/modules/search'

class Search extends Component {
  render() {

    const {fields: {title, searchTerm}, handleSubmit} = this.props;

    return (
      <form onSubmit={handleSubmit(this.props.createSearch)}>
        <h3>Search</h3>
        <div className="form-group">
          <label>Title</label>
          <input type="text" className="form-control" {...title}/>
          <div className="text-help">
            {title.touched ? title.error : '' }
          </div>
        </div>
        <div className="form-group">
          <label>Search Term</label>
          <input type="text" className="form-control" {...searchTerm}/>
          <div className="text-help">
            {searchTerm.touched ? searchTerm.error : '' }
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    );

  }
}

function validate(values) {
  const errors = {};
  if (values.title) {
    if (values.title.match(/[$-/:-?{-~!"^_`\[\]]/)) {
      errors.title = 'Title contains forbidden char';
    }
  } else {
    errors.title = 'Enter a title';
  }

  // If the searchterm does not exist, prompt the user to enter one.
  if (!values.searchTerm) {
    errors.searchTerm = 'Enter a search term';
  }
  return errors;
}

export default reduxForm({
  form: 'SearchForm',
  fields: ['title', 'searchTerm'], validate
}, null, {createSearch})(Search);
