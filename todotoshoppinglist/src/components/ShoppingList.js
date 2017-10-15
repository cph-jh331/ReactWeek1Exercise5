import React, { Component } from 'react';

class ShoppingList extends Component {
    constructor(props) {
        super(props);
        this.state = { items: [] };
    }

    componentDidMount() {
        const iFacade = this.props.itemFacade;
        iFacade.setObserver(this.listUpdater);
        iFacade.getAllItems();
    }

    listUpdater = data => {
        this.setState({ items: data });
    }

    handleAddItem = e => {
        e.preventDefault();
        let itemValue = this.refs.inputField.value;
        if (itemValue !== "") {
            let item = { value: itemValue };
            this.props.itemFacade.addItem(item);
            this.refs.inputField.value = "";
            this.props.itemFacade.getAllItems();
        } else {
            alert("enter something... like mælk");
        }
    }

    removeItemUpdater = () => {
        this.props.itemFacade.getAllItems();
    }

    handleRemoveItem = e => {
        e.preventDefault();
        let item = this.findItemInState(e.target.innerText);
        if (item) {
            this.props.itemFacade.removeItem(item, this.removeItemUpdater);
        }
    }

    findItemInState = (iValue) => {
        for (let item of this.state.items) {
            if (item.value === iValue) {
                return item;
            }
        }
        return null;
    }

    listItems = () => this.state.items.map(
        item => <a ref="#mennej" className="list-group-item" key={item.id} onClick={this.handleRemoveItem}>{item.value}</a>
    );

    render() {
        return (
            <div>
                <form onSubmit={this.handleAddItem}>
                    <p>Enter your item to add it to the list</p>
                    <input className="form-control" type="text" ref="inputField" />
                </form>
                <div className="jumbotron">
                    <div className="list-group">
                        {this.listItems()}
                    </div>
                    <p>click on an item to remove it.</p>
                </div>

            </div>
        );
    }
}
export default ShoppingList;