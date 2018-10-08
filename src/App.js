import React, { Component } from 'react';
import SearchComponent from './SearchComponent/SearchComponent.js';
import BookDetail from './BookDetail/BookDetail.js';
import './App.css';

class App extends Component {
  state = {
    selectedBook: {},
    showBookDetail: false
  }
  getSearchBookData = (selectedBook) => {
    this.setState({
      selectedBook,
      showBookDetail: true 
    });
  }
  showDetail = (value) => {
    this.setState({
      showBookDetail: value 
    });
  }
  render() {
    return (
      <div className="app">
        <div className="searchHeader">
          <SearchComponent onSearchCallback={this.getSearchBookData} showDetailCallBack={this.showDetail} />
        </div>
        <div className="searchBody">
          {this.state.showBookDetail && <BookDetail bookInfo={this.state.selectedBook}/>}
          {!this.state.showBookDetail &&
            <div className='iconDiv'>
              <img src='./books.ico' alt='' className='iconStyle'/>
              <span className='labelStyle'>BOOKLET</span>
            </div>
          }
        </div>
      </div>
    );
  }
}

export default App;
