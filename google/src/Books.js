import React, { Component } from 'react';
import SearchArea from "./SearchArea";
import request from 'superagent';

class Books extends Component {
  constructor(props){
    super(props);
    this.state = {
      books: [],
      searchField: ''
    }
  }

  //get boogle api

  searchBook = (e) => {
    e.preventDefault();
    request
      .get("https://www.googleapis.com/books/v1/volumes?q=search+terms")
      .query({ q: this.searchField})
      .then((data) => {
        this.setState({ books: [...data.body.items]})
        })
  }

  //handles the search

  handleSearch = (e) => {
    console.log(e.target.value);
    this.setState({ searchField: e.target.value})
  }

  //render to screen 
  
  render() {
    return (
      <div>
        <SearchArea handleSearch = {this.handleSearch}/>
      </div>
    )
  }
}

export default Books;