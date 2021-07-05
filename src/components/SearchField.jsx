import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import TypeChecker from 'typeco';

const ENTER_KEY = 13;
const SEARCH_BUTTON_EDGE = 35;

const searchFieldStyle = {
  border: '1px #ddd solid',
  display: 'inline-flex',
  justifyContent: 'space-between',
  height: SEARCH_BUTTON_EDGE,
};

const searchFieldButtonStyle = (disabled) => ({
  height: SEARCH_BUTTON_EDGE - 2, // reduces 2px because of top and bottom border
  width: SEARCH_BUTTON_EDGE - 2,
  outline: 'none',
  backgroundColor: 'white',
  cursor: disabled ? 'auto' : 'pointer',
  padding: 5,
  boxSizing: 'border-box',
  appearance: 'none',
  border: 'none',
  borderLeft: '1px #ddd solid',
});

const searchFieldInputStyle = {
  outline: 'none',
  border: 'none',
  fontSize: 14,
  padding: 10,
  flex: 1,
  color: '#5a5a5a',
  fontWeight: 100,
  height: SEARCH_BUTTON_EDGE - 2,
};

const SearchIcon = () => {
  const iconEdge = Math.ceil(SEARCH_BUTTON_EDGE * 0.60);
  const searchIconStyle = {
    fill: '#727272',
  };
  return (
    <svg
      version="1.1"
      x="0px"
      y="0px"
      width={iconEdge}
      height={iconEdge}
      viewBox="0 0 635 635"
      style={searchIconStyle}
    >
      <g>
        <path d="M255.108,0C119.863,0,10.204,109.66,10.204,244.904c0,135.245,109.659,244.905,244.904,244.905
          c52.006,0,100.238-16.223,139.883-43.854l185.205,185.176c1.671,1.672,4.379,1.672,5.964,0.115l34.892-34.891
          c1.613-1.613,1.47-4.379-0.115-5.965L438.151,407.605c38.493-43.246,61.86-100.237,61.86-162.702
          C500.012,109.66,390.353,0,255.108,0z M255.108,460.996c-119.34,0-216.092-96.752-216.092-216.092
          c0-119.34,96.751-216.091,216.092-216.091s216.091,96.751,216.091,216.091C471.199,364.244,374.448,460.996,255.108,460.996z"
        />
      </g>
    </svg>
  );
};

const SearchField = ({
  classNames,
  searchText,
  placeholder,
  disabled,
  onChange,
  onEnter,
  onSearchClick,
  onBlur,
}) => {
  const [value, setValue] = useState(searchText);

  useEffect(() => {
    setValue(searchText);
  }, [searchText, setValue]);

  const onChangeHandler = useCallback((event) => {
    setValue(event.target.value);
    if (TypeChecker.isFunction(onChange)) {
      onChange(event.target.value, event);
    }
  }, [onChange, setValue]);

  const onEnterHandler = useCallback((event) => {
    const isEnterPressed = event.which === ENTER_KEY ||
      event.keyCode === ENTER_KEY;
    if (isEnterPressed && TypeChecker.isFunction(onEnter)) {
      onEnter(event.target.value, event);
    }
  }, [onEnter]);

  const onSearchClickHandler = useCallback(() => {
    if (TypeChecker.isFunction(onSearchClick)) {
      onSearchClick(value);
    }
  }, [onSearchClick]);

  const onBlurHandler = useCallback((event) => {
    if (TypeChecker.isFunction(onBlur)) {
      onBlur(event.target.value, event);
    }
  }, [onBlur]);

  const className = `react-search-field ${classNames}`;

  return (
    <div
      className={className}
      style={searchFieldStyle}
    >
      <input
        className="react-search-field-input"
        style={searchFieldInputStyle}
        onChange={onChangeHandler}
        onKeyPress={onEnterHandler}
        onBlur={onBlurHandler}
        placeholder={placeholder}
        type="text"
        value={value}
        disabled={disabled}
      />
      <button
        className="react-search-field-button"
        type="button"
        aria-label="search button"
        style={searchFieldButtonStyle(disabled)}
        onClick={onSearchClickHandler}
        disabled={disabled}
      >
        <SearchIcon />
      </button>
    </div>
  );
};

SearchField.propTypes = {
  classNames: PropTypes.string,
  searchText: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  onEnter: PropTypes.func,
  onSearchClick: PropTypes.func,
  onBlur: PropTypes.func,
};

SearchField.defaultProps = {
  classNames: '',
  searchText: '',
  placeholder: 'Search',
  disabled: false,
  onChange: null,
  onEnter: null,
  onSearchClick: null,
  onBlur: null,
};

export default SearchField;
