import React, { Component } from 'react';
import ShoppingList from './components/ShoppingList';
import ItemFacade from './data/ItemFacade';

class App extends Component {

  render() {
    return (
      <div className="App">
        <ShoppingList itemFacade={ItemFacade} />
      </div>
    );
  }
}

export default App;
