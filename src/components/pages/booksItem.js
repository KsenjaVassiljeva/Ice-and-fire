import React, { Component } from 'react';
import getService from '../../services/getservice';  // Fixed import path and syntax
import ItemDetails, { Field } from '../itemDetails';  // Corrected import for ItemDetails and Field

export default class BooksItem extends Component {
  gotService = new getService(); // Fixed variable naming convention

  render() {
    return (
      <ItemDetails
        itemId={this.props.bookId}
        getData={this.gotService.getBook} // Corrected method name and syntax
      >
        <Field field="numberOfPages" label="Number of Pages" />
        <Field field="publisher" label="Publisher" />
        <Field field="released" label="Released" />
      </ItemDetails>
    );
  }
}
