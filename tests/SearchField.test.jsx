import React from 'react';

import { expect } from 'chai';
import { shallow } from 'enzyme';

import SearchField from '../src/components/SearchField';

describe('<SearchField />', () => {
  it('should render with defaults', () => {
    expect(shallow(<SearchField />)).to.have.length(1);
  });
  it('should render placeholder', () => {
    const placeholderText = 'testPlaceholder';
    const component = shallow(<SearchField placeholder={placeholderText} />);
    expect(component.children().at(0).props().placeholder).to.eql(placeholderText);
  });
  it('should render searchText', () => {
    const searchText = 'testSearchText';
    const component = shallow(<SearchField searchText={searchText} />);
    expect(component.children().at(0).props().value).to.eql(searchText);
  });
  it('should render searchText as value', () => {
    const searchText = 'testSearchText';
    const component = shallow(<SearchField searchText={searchText} />);
    expect(component.children().at(0).props().value).to.eql(searchText);
  });
  it('should render searchText as value', () => {
    const searchText = 'testSearchText';
    const component = shallow(<SearchField />);
    expect(component.find('SearchIcon')).to.have.length(1);
  });
});
