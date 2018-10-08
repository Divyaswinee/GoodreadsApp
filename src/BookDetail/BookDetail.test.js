import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import BookDetail from './BookDetail';
import StarRatingComponent from 'react-star-rating-component';

Enzyme.configure({ adapter: new Adapter() });

describe('BookDetail', () => {
	const props = {
		bookInfo : {
			URL: 'https://images.gr-assets.com/books/1419840779m/23808585.jpg',
			author: 'Dale Carnegie',
			averageRating: '4.16',
			bookName: 'Kako si pridobiš prijatelje',
			id: '2370171',
			label: 'Kako si pridobiš prijatelje',
			value: '2370171'
		}
	};
	const component = mount(<BookDetail {...props}/>);

	it ('component renders correctly', () => {
    expect(component).toMatchSnapshot();
  });

  it('check child component StarRatingComponent Present or not', () => {
    expect(component.find(StarRatingComponent).length).toEqual(1);
  });

 	it('Finding Image Div', () => {
 		expect(component.find('.containerLeft').length).toBe(1);
 	});

 	it('Finding Title Div', () => {
 		expect(component.find('.titleDiv').length).toBe(1);
 	});

 	it('Finding Author Div', () => {
 		expect(component.find('.authorDiv').length).toBe(1);
 	});

 	it('Finding rating Div', () => {
 		expect(component.find('.ratingDiv').length).toBe(1);
 	});

 	it('Finding description Div', () => {
 		expect(component.find('.descriptionDiv').length).toBe(1);
 	});
});