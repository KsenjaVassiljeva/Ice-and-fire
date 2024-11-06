import React, { Component } from 'react';
import ItemList from '../itemList';  // Fixed import path and syntax
import ErrorMessage from '../errorMessage';  // Fixed import path and name
import getService from '../../services/getservice';  // Fixed import path and case
import { withRouter } from 'react-router-dom';  // Fixed import for withRouter

export class BooksPage extends Component {
  gotService = new getService(); // Fixed variable naming convention

  state = {
    selectedBook: null,
    error: false
  };

  onItemSelected = (id) => {
    this.setState({
      selectedBook: id
    });
    this.props.history.push(id); // Push the selected itemId to the URL
  };

  static getDerivedStateFromError() {
    return { error: true }; // Using getDerivedStateFromError for error handling
  }

  render() {
    if (this.state.error) {
      return <ErrorMessage />;
    }

    return (
      <ItemList
        onItemSelected={this.onItemSelected}
        getData={this.gotService.getAllBooks}
        renderItem={({ name }) => name} // Assuming 'name' is the field to render
      />
    );
  }
}

export default withRouter(BooksPage);  // Wrap component with withRouter to get routing functionality
