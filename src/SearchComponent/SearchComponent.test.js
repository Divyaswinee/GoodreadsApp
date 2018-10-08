import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SearchComponent from './SearchComponent';

Enzyme.configure({ adapter: new Adapter() });

describe('SearchComponent', () => {

	const component = shallow(<SearchComponent />);

	it ('component renders correctly', () => {
    expect(component).toMatchSnapshot();
  });

  
})