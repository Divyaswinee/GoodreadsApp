import React, { Component } from "react";
import AsyncSelect from 'react-select/lib/Async';
import axios from 'axios';
import proxify from 'proxify-url';
import PropTypes from 'prop-types';
import { APIKEY, searchAPIURL } from '../config/config';
import './SearchComponent.css';

class SearchComponent extends Component {
	state = {
    searchText: ''
  };

  static propTypes = {
    onSearchCallback: PropTypes.func
  }

  getSearchResult = (searchTerm) => {
    const url = `${searchAPIURL}?key=${APIKEY}&q=${encodeURI(searchTerm)}&search=title`;
    const proxyUrl = proxify(url, { inputFormat: 'xml' });
    return new Promise(resolve => {
      axios.get(proxyUrl)
        .then(({ data }) => {
          return data;
        })
        .then(datatwo => {
          const searchResult = datatwo.query.results.GoodreadsResponse.search;
          const allResult = searchResult.results;
          const workResult = allResult && allResult.work && allResult.work.length > 0 && allResult.work.map((current) => {
            return {
              value: current['id']['content'],
              author: current['best_book']['author']['name'],
              label: current['best_book']['title'],
              bookName: current['best_book']['title'],
              URL: current['best_book']['image_url'],
              averageRating: current['average_rating'],
              id: current['id']['content']
            }
          })
          console.log('workResult ', workResult);
          resolve(workResult);
        })
        .catch(error => {
          console.log('Error', error.toString());
        });
    });
  };

  searchHandleChange = (value) => {
    this.setState({ searchText: value });
    if(value.length === 0) {
      return this.props.showDetailCallBack(false);
    }
    this.props.onSearchCallback(value);
  };

  render() {
  	return (
  		<div className="searchContainer">
  	  	<AsyncSelect
          className="searchBoxCustomize"
          value={this.state.searchText}
          onChange={this.searchHandleChange}
          placeholder="Search Book"
          loadOptions={this.getSearchResult}
          defaultOptions
          backspaceRemoves={true}
          cache={false}
        />
      </div>
  	);
  }
}

export default SearchComponent;