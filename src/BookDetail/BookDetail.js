import React, { Component } from "react";
import axios from 'axios';
import proxify from 'proxify-url';
import StarRatingComponent from 'react-star-rating-component';
import './BookDetail.css';

const API_URL = 'https://www.goodreads.com/book/show/';
const API_KEY = 'vZt6PSQ52iaN3bFKvEwOlQ';

class BookDetail extends Component {
	state = {
    bookDescription: ''
  };

  componentDidMount() {
  	this.getBookDescription(this.props.bookInfo);
  }

  componentWillReceiveProps(nextProps) {
  	const { bookInfo } = this.props;
  	if(nextProps.bookInfo.label !== bookInfo.label) {
  		this.getBookDescription(nextProps.bookInfo);
  	}
  }

  getBookDescription = (book) => {
  	const bookID = book.id;
  	const url = `${API_URL}${bookID}?key=${API_KEY}`;
    const proxyUrl = proxify(url, { inputFormat: 'xml' });
    axios.get(proxyUrl)
    	.then(({ data }) => {
        return data;
      })
      .then(dataNext => {
        const bookResult = dataNext.query.results.GoodreadsResponse.book;
        this.setState({
          bookDescription: bookResult.description
        });
      })
      .catch(error => {
        console.log('Error', error.toString());
      });
  }

  render() {
  	const { bookInfo } = this.props;
  	return (
  		<div className='containerBody'>
  			<div className='containerLeft'>
  				<img src={bookInfo.URL} alt='' className='imgStyle'/>
  			</div>
  			<div className='containerRight'>
  				<div className='titleDiv'>
  					<span>{bookInfo.bookName}</span>
  				</div>
  				<div className='authorDiv'>
  					<span>by {bookInfo.author}</span>
  				</div>
  				<div className='ratingDiv'>
  					<StarRatingComponent 
		          name="rating" 
		          starCount={5}
		          value={bookInfo.averageRating}
		          className='starRatingStyles'
		          starColor={'#ff8c00'}
		          emptyStarColor={'#ffffff'}
		        />
  					<span>{bookInfo.averageRating}</span>
  				</div>
  				{this.state.bookDescription !== 'Undefined' && <div className='descriptionDiv'>
  					{this.state.bookDescription}
  				</div>}
  			</div>
  		</div>
  	);
  }

}

export default BookDetail;