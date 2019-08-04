import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import SearchForm from './widget/SearchForm'

const MainPage = React.memo(props => {
  return (
    <div>
      Main Page
      <SearchForm />
    </div>
  );
});

export default MainPage;