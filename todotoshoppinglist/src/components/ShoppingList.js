import React, { Component } from 'react';

class ShoppingList extends Component {
    constructor(props) {
        super(props);
        this.state = { list: [] };
    }

    addToList = e => {
        e.preventDefault();
        let item = this.refs.inputField.value;
        if (item !== "") {
            let list = this.state.list;
            list.push(item);
            this.setState({ list });
        }
    }

    removeFromList = e => {
        e.preventDefault();
        let item = e.target.innerText;
        let list = this.state.list;
        let indexOfItem = list.indexOf(item);
        list.splice(indexOfItem, 1);
        this.setState({ list })
    }

    listItems = () => this.state.list.map(
        item => <li key={item}><a href="#mennej" key={item} onClick={this.removeFromList}>{item}</a></li>
    );

    render() {
        return (
            <div>
                <h3>Shopping list</h3>
                <form>
                    <label>Enter item to add to the shopping list</label><br />
                    <input type="text" ref="inputField" />
                    <button onClick={this.addToList}>Add to list</button>
                </form>
                <h3> list </h3>
                <ul>
                    {this.listItems()}
                </ul>

            </div>
        );
    }
}
export default ShoppingList;