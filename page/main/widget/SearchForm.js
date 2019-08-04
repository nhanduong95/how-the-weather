import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

import SearchableInput from '../../../_baseWidget/SearchableInput';
import { fetchCurrentForecast } from '../../../action';

const SearchForm = React.memo(({...props}) => {
  const [city, setCity] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    props.fetchCurrentForecast(city);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter city name</label>
      <SearchableInput id="inputCity" value={city} handleChange={(event) => setCity(event.target.value)} />
      <button type="submit">Submit</button>
    </form>
  );
});

SearchForm.propTypes = {
  fetchCurrentForecast: PropTypes.func
};

const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  { fetchCurrentForecast }
)(SearchForm);