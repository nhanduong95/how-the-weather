import React, { useState, useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { fetchMultiCurrentForecast } from '../../../action';

const SearchForm = React.memo(({...props}) => {
  const [cities, setCities] = useState({});
  const [countInputs, setCountInputs] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    props.fetchMultiCurrentForecast(Object.values(cities).join(','));
  };

  const addCity = () => {
    const nextIndex = countInputs.length;
    setCities({...cities, [nextIndex]: ''});
    setCountInputs([...countInputs, nextIndex]);
  }

  const inputsRendered = countInputs.length && 
    countInputs.map(item => 
      <input type="text" key={item} value={cities[item]} 
        onChange={event => setCities({...cities, [item]: event.target.value})} />
    );

  useEffect(() => {addCity();}, []);

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter city name</label>
      { inputsRendered }
      { countInputs.length < 5 && 
        <button type="button" onClick={addCity}>+ Compare</button> 
      }
      <button type="submit" style={{display: 'none'}}></button>
    </form>
  );
});

SearchForm.propTypes = {
  fetchMultiCurrentForecast: PropTypes.func
};

const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  { fetchMultiCurrentForecast }
)(SearchForm);