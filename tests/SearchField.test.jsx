import React from 'react';
import { shallow } from 'enzyme';

import SearchField from '../src/components/SearchField';

describe('<SearchField />', () => {
  it('should render with defaults', () => {
    expect(shallow(<SearchField />)).toHaveLength(1);
  });
  it('should render placeholder', () => {
    const placeholderText = 'testPlaceholder';
    const component = shallow(<SearchField placeholder={placeholderText} />);
    expect(component.children().at(0).props().placeholder).toEqual(placeholderText);
  });
  it('should render searchText', () => {
    const searchText = 'testSearchText';
    const component = shallow(<SearchField searchText={searchText} />);
    expect(component.children().at(0).props().value).toEqual(searchText);
  });
  it('should render search button', () => {
    const component = shallow(<SearchField />);
    expect(component.find('button')).toHaveLength(1);
  });
  it('should render SearchIcon', () => {
    const component = shallow(<SearchField />);
    expect(component.find('SearchIcon')).toHaveLength(1);
  });
});
