# React Search Field

[![dependencies Status](https://david-dm.org/nutboltu/react-search-field/status.svg)](https://david-dm.org/nutboltu/react-search-field)  [![Build Status](https://travis-ci.org/nutboltu/react-search-field.svg?branch=master)](https://travis-ci.org/nutboltu/react-search-field)

An elegant search field component for React.

See [Demo and Documentation]( https://nutboltu.github.io/react-search-field/).

![Screenshot](/docs/react-search-field.png)

## Props

The component takes the following props.

| Prop              | Type       | Description |
|-------------------|------------|-------------|
| `classNames`         | string  | Additional classnames for the component |
| `searchText`  | string  | Initial search value of the input |
| `placeholder`  | string  | placeholder for the search input |
| `onChange`        | _function_ | Callback function to invoke when the user press any key. The function  should contain two parameters(value, event). |
| `onEnter`         | _function_ | Callback function to invoke when the user press enter after pressing few keys. The function  should contain two parameters(value, event). |
| `onSearchClick`          | _function_ | Callback function to invoke when the user click the search button. The function  should contain one parameter(value). |

## Installation

```bash
npm install react-search-field --save
```

## Usage

```javascript
import SearchField from "react-search-field";

<SearchField
  placeholder="Search..."
  onChange={onChange}
  searchText="This is initial search text"
  classNames="test-class"
/>
```

## Run

```bash
npm start
```

## License

MIT Licensed. Copyright (c) Farhad Yasir 2018.
