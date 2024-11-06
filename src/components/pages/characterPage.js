import React, { Component } from 'react';
import ItemList from '../itemList'; // Fixed import path
import ItemDetails, { Field } from '../itemDetails'; // Fixed import path and component names
import ErrorMessage from '../errorMessage'; // Fixed import path and name
import getService from '../../services/getservice'; // Fixed import path and class name
import RowBlock from '../rowBlock'; // Fixed import path

export default class CharacterPage extends Component {
  gotService = new getService(); // Fixed variable naming convention

  state = {
    selectedChar: null, // Fixed state variable name
    error: false
  };

  onItemSelected = (id) => {
    this.setState({
      selectedChar: id // Fixed state variable name
    });
  };

  static getDerivedStateFromError() {
    return { error: true }; // Handling error boundary
  }

  render() {
    const { error, selectedChar } = this.state;

    if (error) {
      return <ErrorMessage />; // Display error message if error is true
    }

    const itemList = (
      <ItemList
        onItemSelected={this.onItemSelected}
        getData={this.gotService.getAllCharacters}
        renderItem={({ name, gender }) => `${name} (${gender})`} // Fixed string interpolation syntax
      />
    );

    const itemDetails = selectedChar && (
      <ItemDetails
        itemId={selectedChar}
        getData={this.gotService.getCharacter}
      >
        <Field field="gender" label="Gender" />
        <Field field="born" label="Born" />
        <Field field="died" label="Died" /> {/* Fixed field name */}
        <Field field="culture" label="Culture" />
      </ItemDetails>
    );

    return (
      <RowBlock left={itemList} right={itemDetails} />
    );
  }
}
