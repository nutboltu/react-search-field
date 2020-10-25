import React, { Component } from 'react';
import TypeChecker from 'typeco';

import SearchField from '../components/SearchField';

import './App.css';

const exampleList = [
  {
    name: 'Joe Smith',
    email: 'joesmith@gmail.com',
  },
  {
    name: 'Alan Donald',
    email: 'alan@gmail.com',
  },
  {
    name: 'Kavindya Gayamini',
    email: 'kavindya@gmail.com',
  },
];

const getMatchedList = (searchText) => {
  if (TypeChecker.isEmpty(searchText)) return exampleList;
  return exampleList.filter(item => item.name.toLowerCase().includes(searchText.toLowerCase()));
};

const ExampleList = props => (
  <div className="list-example">
    <div className="list-header">
      <ul>
        <li> Name </li>
        <li> Email </li>
      </ul>
    </div>
    <div className="list-body">
      {
        props.list.map((item, index) => (
          <ul key={index}>
            <li> {item.name} </li>
            <li> {item.email} </li>
          </ul>))
      }
    </div>
  </div>
);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      basicExampleList: [...exampleList],
    };
    this.onBasicExampleChange = this.onBasicExampleChange.bind(this);
  }

  onBasicExampleChange(value) {
    this.setState({
      basicExampleList: getMatchedList(value),
    });
  }

  render() {
    return (
      <div className="react-search-field-demo container">
        <div>
          <h3>Patient History Details</h3>
        </div>
        <div>
          <h5>Cancer Unit </h5>
          <SearchField
            placeholder="Search item"
            // onChange={this.onBasicExampleChange}
            onEnter={this.onBasicExampleChange}
            onSearchClick={this.onBasicExampleChange}
          />
          <ExampleList
            list={this.state.basicExampleList}
          />
        </div>
      </div>
    );
  }
}

export default App;
