import React, { useState, useEffect, useRef } from 'react';
import { PropTypes } from 'prop-types';
import * as cities from '../_cities.json';

const SearchableInput = React.memo(props => {
  const {value, handleChange, id} = props;
  const cityList = cities.default;
  const [suggestedCities, setSuggestedCities] = useState([...cityList]);
  const [input, setInput] = useState(value);
  const [isEditMode, setEditMode] = useState(false);
  const inputEl = useRef(null);
  console.log('input', input);

  const onTextChange = event => {
    handleChange(event);
    const keyword = event.target.value.toLowerCase();
    setSuggestedCities(cityList.filter(item => item.name.toLowerCase().includes(keyword)));
  };

  const onSelectionChange = event => {
    inputEl.current.value = event.target.value;
  }

  const onDropdownBlur = () => {
    setInput(inputEl.current.value);
    setEditMode(false);
  }

  useEffect(() => { 
    if (isEditMode) {
      inputEl.current.focus();
    }
  }, [isEditMode]);

  return (
    <React.Fragment>
      { isEditMode && 
        <React.Fragment>
          <input type="text" value={value} onChange={onTextChange} ref={inputEl} />
          <div onBlur={onDropdownBlur}>
            { !!suggestedCities.length &&
              suggestedCities.map(item => 
                <div key={item.id}>
                  <input type="radio" value={item.name} id={`${id} ${item.id}`} name={id} onChange={onSelectionChange} />
                  <label for={`${id} ${item.id}`}>{item.name}</label>
                </div>
              )
            }

            { !suggestedCities.length && 'No result found' }
          </div>
        </React.Fragment> 
      }
      { !isEditMode && 
        <div style={{width: '100px', height: '30px', border: '1px solid'}} onClick={() => setEditMode(!isEditMode)}>{input}</div>
      }
    </React.Fragment>
  );
});

SearchableInput.propTypes = {
  value: PropTypes.string,
  handleChange: PropTypes.func,
  id: PropTypes.string.isRequired,
};

export default SearchableInput;