import React, { Component } from 'react';
import ItemList from '../itemList'; // Fixed import path
import ItemDetails, { Field } from '../itemDetails'; // Fixed import path and component names
import ErrorMessage from '../errorMessage'; // Fixed import path and component name
import getService from '../../services/getservice'; // Fixed import path and class name
import RowBlock from '../rowBlock'; // Fixed import path

export default class HousesPage extends Component {
  gotService = new getService(); // Fixed variable naming convention

  state = {
    selectedHouse: null, // Fixed state variable name
    error: false
  };

  onItemSelected = (id) => {
    this.setState({
      selectedHouse: id // Fixed state variable name
    });
  };

  static getDerivedStateFromError() {
    return { error: true }; // Handling error boundary
  }

  render() {
    const { error, selectedHouse } = this.state;

    if (error) {
      return <ErrorMessage />; // Display error message if error is true
    }

    const itemList = (
      <ItemList
        onItemSelected={this.onItemSelected}
        getData={this.gotService.getAllHouses}
        renderItem={({ name }) => name} // Render house name
      />
    );

    const itemDetails = selectedHouse && (
      <ItemDetails
        itemId={selectedHouse}
        getData={this.gotService.getHouse}
      >
        <Field field="region" label="Region" />
        <Field field="words" label="Words" />
        <Field field="titles" label="Titles" />
        <Field field="ancestralWeapons" label="Ancestral Weapons" /> {/* Fixed field name */}
      </ItemDetails>
    );

    return (
      <RowBlock left={itemList} right={itemDetails} />
    );
  }
}
