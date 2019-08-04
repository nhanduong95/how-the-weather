import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import SearchForm from './widget/SearchForm'

const DetailsPage = props => {
  const { data } = props;
  
  return (
    <div>
      Details Page
      <SearchForm />
      {data.length &&
        data.map(item => {
          const { coord, weather, main, wind, clouds, sys } = item;
          return (
            <div key={item.id}>
              <h1>{item.name}</h1>
              Latitude: {coord && coord.lat}<br/>
              Longtitude: {coord && coord.lon}<br/>
              Weather: {weather && weather.description}<br/>
              Temperature: {main && main.temp}<br/>
              Pressure: {main && main.pressure}<br/>
              Humidity: {main && main.humidity}<br/>
              Min/Max Temperature: {main && main.temp_min} - {main && main.temp_max}<br/>
              Wind Speed: {coord && coord.lon}<br/>
            </div>
          );
        })
      }
    </div>
  );
};

DetailsPage.propTypes = {
  data: PropTypes.array,
};

const mapStateToProps = state => {
  return ({ data: state.weatherForecast });
};

export default connect(
  mapStateToProps
)(DetailsPage);