import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';
import SearchComponent from './SearchComponent/SearchComponent.js';
import BookDetail from './BookDetail/BookDetail.js';

Enzyme.configure({ adapter: new Adapter() });

describe('App', () => {
	let wrapper;
	wrapper = mount(<App />);

	const component = shallow(<App />);
  it ('component renders correctly', () => {
    expect(component).toMatchSnapshot();
  });

	it('renders without crashing', () => {
	  const div = document.createElement('div');
	  ReactDOM.render(<App />, div);
	  ReactDOM.unmountComponentAtNode(div);
	});

	it ('check child component SearchComponent Present or not', () => {
    expect(wrapper.find(SearchComponent).length).toEqual(1);
  });
  
  it ('check child component BookDetail Present or not', () => {
  	expect(wrapper.find(BookDetail).length).toEqual(0);
  	wrapper.setState({ showBookDetail: true })
    expect(wrapper.find(BookDetail).length).toEqual(1);
  });
});
